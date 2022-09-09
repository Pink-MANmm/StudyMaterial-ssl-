import hashlib
import json
import requests
import time
import random

import execjs

def get_sign():
    with open('../baochinhphuSpider/sign.js', 'r') as f:
        js = f.read()
        f.close()

    sign = execjs.compile(js).call('e', '兔子')
    print(sign)
    return sign
# 翻译函数，word 需要翻译的内容
def translate(word):
    # 有道词典 api
    url = 'https://translate.google.cn/_/TranslateWebserverUi/data/batchexecute?rpcids=MkEWBc&source-path=/&f.sid=4400046647129488191&bl=boq_translate-webserver_20220719.06_p0&hl=zh-CN&soc-app=1&soc-platform=1&soc-device=1&_reqid=649894&rt=c'
    key = {
        'f.req': '[[["MkEWBc","[[\"'+word+'\",\"auto\",\"zh-CN\",true],[null]]",null,"generic"]]]'
    }
    headers={
        'Cookie': '_ga=GA1.2.1494419517.1658487004; _gid=GA1.2.1565060333.1658487004; geo_region=DC; tp-deviceid-legacy=2c36a0e9db8d4b200462359ef4b7a39e; tp-deviceid=2c36a0e9db8d4b200462359ef4b7a39e; _grx=1ab40262-0834-4009-8516-9299faf34fab; _iibeat_session=56ada93a-bfba-48b7-977f-a95a762213e3; _col_uuid=66203a0d-1fe4-4c90-81e0-24716c092a4f-619o; _pbjs_userid_consent_data=3524755945110770; __gads=ID=1ea2cab0d237bec0:T=1658487009:S=ALNI_MbkGoKgU3lkarEugfBMz3NiGDTD9A; mdeviceid=b5575967495c62a8dbad1800c7792a2c; geo_country=US; geo_continent=NA; _iibeat_vt=20220622,20220623,20220624; currencyCode=USD; _gcl_au=1.1.932336611.1658638402; _fbp=fb.1.1658638402838.910352483; geolocation=Dallas; grxgeostate=Texas; deviceid=1p7cw5zg65wamhc6fvi889fbj; lgc_deviceid=1p7cw5zg65wamhc6fvi889fbj; geostate=MH; customLaterClick=yes; JSESSIONID=426317DCFA99077F261F9054907B2F3B; _rtbpbjs_userid_consent_data=3524755945110770; ucf_uid=bf789783-19c7-49bc-8d57-6a48cf768291; pmtimesig=[[1658649684544,0],[1658650385940,701396]]; MgidStorage={"0":{"svspr":"https://timesofindia.indiatimes.com/world/china","svsds":5},"C1240524":{"page":1,"time":1658656729935},"C1240522":{"page":1,"time":1658656729913}}; ak_bmsc=ABB7C3A8B3915D80902454C02AAE775A~000000000000000000000000000000~YAAQqvkwF56i0CuCAQAAUzClLxDOd1CCu3whCqaT1pZI2OJ7Ca3QDTQJ+QWvAV/vrXxsyOpVllrWUwJH28WQU+jLRJeXYwQbf+ZpMN71bnLenU6fKmtHLNSnggUbqUE0wQ64iFDnbKHnLplKKXXo8lQ1QE3gWAkviCt/SWnnljizjkMHY/OfZ3BNFu2UGqV+DLOmqSz6Y60Puy+n2BTBJ2TNPMqAxLAPCyfe/bXFLmOsuu253Zo1K5u5COLOAUxYxrcdz6F6FBl4eruX8iiVpqGt0vxweymWXAdsYzNpt+EA0YTe6CBgWuFbcaOe9f5jEzYeGf3q+qLHka+gQXyhqRxuo/ZoTyLXuKN0iVHj44rtH1k5r19JelpEjYvbU1/qbfvAiYD3Cz4nju4bEbA=; __gpi=UID=000007f62ce37672:T=1658487009:RT=1658660729:S=ALNI_MbcD2vpk2CVqV17vSezz1USI5p-zQ; AMP_TOKEN=$NOT_FOUND; _grxs=c62ad111-4934-45a8-a61f-68791e4d4aad; cto_bundle=PPzJiF9URFkzc2xocHZjeWlNJTJCRHlkZ2VHQ2olMkIlMkIxMTU5R2MlMkZqaGZGdFhuMnFJRUV5Uk95dmdlRGxFOHZsSnFoUDVwSm51NW5LSVJ1WEclMkZtY3N1YkRhR1BiRThhVSUyRmdRTzBzM1Q0YmptRkdUVE9rT2tuOTdkc3Y1bThkUE56JTJCMzlVTiUyRmFsUnZScDhja2lwRGlEZkx5OVpoUHZBJTNEJTNE; _gat=1',
        'Origin': 'https://translate.google.cn',
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
    return json.loads(response.text)
print(translate('hello'))

