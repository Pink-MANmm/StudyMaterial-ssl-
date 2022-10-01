import scrapy
from scrapy import Selector, Request
from scrapy.http import HtmlResponse

from Translate import translate
from baochinhphuSpider.items import pakistanspiderItem

class PakistanSpider(scrapy.Spider):
    name = 'pakistan'
    allowed_domains = ['dailytimes.com.pk']
    custom_settings = {
        # 'LOG_LEVEL': 'INFO',
        'ITEM_PIPELINES': {'baochinhphuSpider.pipelines.PakistanspiderPipeline': 500}
    }
    start_urls = ['http://dailytimes.com.pk/']

    def start_requests(self):
        for page in range(1, 1000):
            if page == 1:
                url = 'https://dailytimes.com.pk/world/'
                yield scrapy.Request(url=url)
            else:
                url = f'https://dailytimes.com.pk/world/page/{page}/'
                yield scrapy.Request(url=url)

    def parse(self, response: HtmlResponse, **kwargs):
        sel = Selector(response)
        selectors = sel.css('body > article.post-972269.post.type-post.status-publish.format-standard.has-post-thumbnail.category-world.writer-afp.entry')
        for selector in selectors:
            item = pakistanspiderItem()
            item['news_href'] = selector.css('header > h2 >a::attr(href)').extract_first()
            item['news_title'] = selector.css('header > h2 >a::text').extract_first()
            Mounth = sel.css('header > p >time::text').extract_first()[0:3]
            month = ''
            if Mounth == 'Jan':
                month = '01'
            elif Mounth == 'Feb':
                month = '02'
            elif Mounth == 'Mar':
                month = '03'
            elif Mounth == 'Apr':
                month = '04'
            elif Mounth == 'May':
                month = '05'
            elif Mounth == 'Jun':
                month = '06'
            elif Mounth == 'Jul':
                month = '07'
            elif Mounth == 'Aug':
                month = '08'
            elif Mounth == 'Sep':
                month = '09'
            elif Mounth == 'Oct':
                month = '10'
            elif Mounth == 'Nov':
                month = '11'
            elif Mounth == 'Dec':
                month = '12'
            item['news_date'] = selector.css('header > p >time::text').extract_first()[9:13]+'/'+selector.css('header > p >time::text').extract_first()[5:7]+month
            yield item