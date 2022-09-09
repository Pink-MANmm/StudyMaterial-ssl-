import json
import urllib.request
import urllib.parse

import scrapy
from scrapy import Selector
from scrapy.http import HtmlResponse

from baochinhphuSpider.items import BaochinhphuspiderItem


class baochinhphuSpider(scrapy.Spider):
    name = 'baochinhphu'
    allowed_domains = ['cn.baochinhphu.vn']
    custom_settings = {
        #'LOG_LEVEL': 'INFO',
        'ITEM_PIPELINES': {'baochinhphuSpider.pipelines.BaochinhphuspiderPipeline': 300}
    }
    start_urls = ['http://cn.baochinhphu.vn/%E6%97%B6%E6%94%BF%E5%A4%96%E4%BA%A4.htm']

    def start_requests(self):
        for page in range(1,1000):
            url=f'https://cn.baochinhphu.vn/timelinelist/1161087/{page}.htm'
            yield scrapy.Request(url=url)

    def parse(self, response:HtmlResponse):
        sel=Selector(response)
        selectors=sel.css('body > div.box-stream-item')
        for selector in selectors:
            item=BaochinhphuspiderItem()
            for keyword in ['中国','中华','毛泽东','习近平','习主席','中华民族','中越','越中','中方','胡锦涛','温家宝','李克强']:
                if keyword in selector.css('div.box-stream-content > div > a::text').extract_first():
                    item['news_title']=selector.css('div.box-stream-content > div > a::text').extract_first()
                    item['news_date']=selector.css('div.box-stream-content > span::text').extract_first()[8:18]+'/'+selector.css('div.box-stream-content > span::text').extract_first()[0:5]
                    item['news_href']=selector.css('div.box-stream-content > div > a::attr(href)').extract_first()
                    yield item
                    break


