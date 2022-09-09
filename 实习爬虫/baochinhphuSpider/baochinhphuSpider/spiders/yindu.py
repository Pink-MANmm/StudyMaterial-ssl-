import scrapy
from scrapy import Selector, Request
from scrapy.http import HtmlResponse

from Translate import translate
from baochinhphuSpider.items import yinduspiderItem

class YinduSpider(scrapy.Spider):
    name = 'yindu'
    allowed_domains = ['timesofindia.indiatimes.com']
    custom_settings = {
        # 'LOG_LEVEL': 'INFO',
        'ITEM_PIPELINES': {'baochinhphuSpider.pipelines.YinduspiderPipeline': 500}
    }
    start_urls = ['http://timesofindia.indiatimes.com/']

    def start_requests(self):
        for page in range(1, 1000):
            if page==1:
                url = 'https://timesofindia.indiatimes.com/world/china'
                yield scrapy.Request(url=url,meta={'proxy':'socks5://127.0.0.1:19181'})
            else:
                url = f'https://timesofindia.indiatimes.com/world/china/{page}'
                yield scrapy.Request(url=url,meta={'proxy':'socks5://127.0.0.1:19181'})

    def parse(self, response: HtmlResponse,**kwargs):
        sel = Selector(response)
        selectors = sel.css('body > ul.list5.clearfix > li')
        for selector in selectors:
            item = yinduspiderItem()
            item['news_href'] = selector.css('span.w_tle > a::attr(href)').extract_first()
            yield Request(
                url='https://timesofindia.indiatimes.com/world/china'+item['news_href'],callback=self.parse_detail,
                cb_kwargs={'item':item},
                meta={'proxy':'socks5://127.0.0.1:19181'}
            )

    def parse_detail(self,response,**kwargs):
        item=kwargs['item']
        sel = Selector(response)
        item['news_title']=sel.css('h1._1Y-96 > span::text').extract_first()
        Mounth=sel.css('div.yYIu- byline > span::text').extract_first()[1:4]
        mounth=''
        if Mounth=='Jan':
            mounth='01'
        elif Mounth=='Feb':
            mounth='02'
        elif Mounth=='Mar':
            mounth='03'
        elif Mounth=='Apr':
            mounth='04'
        elif Mounth=='May':
            mounth='05'
        elif Mounth=='Jun':
            mounth='06'
        elif Mounth=='Jul':
            mounth='07'
        elif Mounth=='Aug':
            mounth='08'
        elif Mounth=='Sep':
            mounth='09'
        elif Mounth=='Oct':
            mounth='10'
        elif Mounth=='Nov':
            mounth='11'
        elif Mounth=='Dec':
            mounth='12'
        item['news_date']=sel.css('div.yYIu- byline > span::text').extract_first()[9:13]+'/'+mounth+'/'+sel.css('div.yYIu- byline > span::text').extract_first()[5:7]+'/'+sel.css('div.yYIu- byline > span::text').extract_first()[15:20]
        yield item