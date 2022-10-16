# vim ftp.py
#!/bin/env python3
# -*- coding: utf-8 -*-
# Time: 2021-5-15 21:08
# Description: FTP CLIENT
# File Name: ftp.py

# FTP客户端
from ftplib import FTP

# 1.登入ftp
ftp = FTP(host='172.16.115.233', user='', passwd='')

# 设置编码方式，由于在windows系统，设置编码方式为gbk'
ftp.encoding = 'gbk'

# 切换目录
ftp.cwd('test')

# 列出文件夹内容
ftp.retrlines('LIST')     # 或者ftp.dir()

# 下载文件 node.txt
ftp.retrbinary('RETR node.txt', open('node.txt', 'wb').write)

# 上传文件ftpserver.py
#ftp.storbinary('STOR ftpserver.py', open('ftpserver.py', 'rb'))

# 查看目录下文件详情
for file in ftp.mlsd(path='/test'):
    print(file)
