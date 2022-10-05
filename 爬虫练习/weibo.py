import os
import re  #正则表达式提取文本

import requests  #发送请求
import pandas as pd  #存取csv数据
import datetime  #转换时间


def trans_time(v_str):
    """转换GMT时间为标准格式"""
    GMT_FORMAT = '%a %b %d %H:%M:%S +0800 %Y'
    timeArray = datetime.datetime.strptime(v_str,GMT_FORMAT)
    ret_time = timeArray.strptime("%Y-%m-%d %H:%M:%S")
    return ret_time

def get_weibo_list(v_keyword,v_max_page):
    """
    爬取微博内容列表
    :param v_keyword: 搜索关键字
    :param v_max_page: 爬取前几页
    :return: None
    """
    #请求头
    headers = {
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'accept':'application/json, text/plain, */*',
        'accept-encoding': 'gzip, deflate, br',
    }
for page in range(1,v_max_page + 1):
    print('===开始爬取第{}页微博==='.format(page))
    url='https://m.weibo.cn/api/container/getIndex?containerid=100103type=1&q=唐山打人案宣判&page_type=searchall'
    params = {
        "containerid":"100103type=1&q={}".format(v_keyword),
        "page_type":"searchall",
        "page":page
    }

    r = requests.get(url,headers=headers,params=params)
    print(r.status_code)

    cards = r.json()["data"]["cards"]

    text_list = jsonpath(cards,'$..mblog.text')

    dr = re.compile(r'<[^>]=>',re.S)
    text2_list = []
    print(text_list)
    if not text_list:
        continue
    if type(text_list) == list and len(text_list) > 0:
        for text in text_list:
            text2 = dr.sub('',text)
            print(text2)
            text2_list.append(text2)
            #微博创建时间
            time_list = jsonpath(cards,'$..mblog.user.screen_name')
            time_list = [trans_time(v_str=i)for i in time_list]
            #微博作者
            author_list = jsonpath(cards,'$..mblog.user.screen_name')
            #微博id
            id_list = jsonpath(cards,'$..mblog.id')
            #微博bid
            bid_list = jsonpath(cards,'$..mblog.bid')
            #转发数
            reposts_count_list =jsonpath(cards,'$..mblog.reposts_count')
            #评论数
            comments_count_list = jsonpath(cards,'$..mblog.comments_count')
            #点赞数
            attitudes_count_list = jsonpath(cards,'$..mblog.attitudes_count')
            #数据导入dataframe库
            df = pd.DataFrame(
                {
                    '页码': [page] * len(id_list),
                    '微博id': id_list,
                    '微博bid': bid_list,
                    '微博作者': author_list,
                    '发布时间': time_list,
                    '微博内容': text2_list,
                    '转发数': reposts_count_list,
                    '评论数': comments_count_list,
                    '点赞数': attitudes_count_list,
                }
            )
            #表头
            if os.path.exeists(v_weibo_file):
                header = None
            else:
                header = ['页码','微博id','微博bid','微博作者','发布时间','微博内容','转发数','评论数','点赞数']
                #保存到csv文件
                df.to_csv(v_weibo_file,mode='a+',index=False,header=header,encoding='utf_8_sig')
                print('csv保存成功:{}'.format(v_weibo_file))





if __name__ == '__main__':
    max_search_page = 100  #爬前n页
    #爬取关键字
    search_keyword = '唐山打人案宣判'
    #保存文件名
    v_weibo_file ='微博清单_{}_前{}页.csv'.format(search_keyword,max_search_page)
    #如果scv文件存在，先删除之
    if os.path.exists(v_weibo_file):
        os.remove(v_weibo_file)
        print('微博清单已存在，已删除：{}'.format(v_weibo_file))
        #调用爬取微博函数
        get_weibo_list(v_keyword=search_keyword,v_max_page=max_search_page)
        #数据清洗-去重
        df = pd.read_csv(v_weibo_file)
        #删除重复数据
        df.drop_dulplicates(subset=['微博bid'],inplace=True,keep='first')
        #再次保存csv文件
        df.to_scv(v_weibo_file,index=False,encodings='utf_8_sig')
        print('数据清洗完成')
