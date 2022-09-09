import hashlib
import json

import execjs
import requests
import time
import random

# 翻译函数，word 需要翻译的内容
def translate(word):
    def getSign(client, tanslateWd, time, key):
        s = client + tanslateWd + time + key
        m = hashlib.md5()
        m.update(s.encode('utf-8'))
        return m.hexdigest()
    # 有道词典 api
    url = 'https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule'
    # 传输的参数，其中 i 为需要翻译的内容
    with open('../baochinhphuSpider/sign.js') as f:
        jsData = f.read()

    p = execjs.compile(jsData).call('res', 'hello')
    client = 'fanyideskweb'
    salt=p['salt']
    sign=p['sign']
    lts=p['ts']
    key = {
        'i': word,
        'from':'AUTO',
        'to':'AUTO',
        'smartresult':'dict',
        'client':client,
        "salt":salt,
        "sign":sign,
        'lts':lts,
        'bv':'f0819a82107e6150005e75ef5fddcc3b',
        'doctype':'json',
        'version': '2.1',
        'keyfrom':'fanyi.web',
        'action':'FY_BY_REALTlME'
    }
    # key 这个字典为发送给有道词典服务器的内容
    headers={
        'Cookie': 'OUTFOX_SEARCH_USER_ID=1913627579@10.108.162.135; OUTFOX_SEARCH_USER_ID_NCOO=844126657.0743039; fanyi-ad-id=308216; fanyi-ad-closed=1; ___rl__test__cookies=1658315112539',
        'Referer': 'https://fanyi.youdao.com/',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
    }
    proxies={
        'http':'socks5://127.0.0.1:19181',
        'https':'socks5://127.0.0.1:19181'
    }
    response = requests.post(url,data=key,headers=headers,proxies=proxies)
    print(response)
    print(response.text)
    # 判断服务器是否相应成功
    return json.loads(response.text)['translateResult'][0][0]['tgt']
print(translate('hello'))
