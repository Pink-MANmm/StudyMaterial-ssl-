from cmath import log
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View
from .models import positionData
import pandas as pd
import json
import numpy as np
import json
import pymongo
# Create your views here.

myclient = pymongo.MongoClient('mongodb://localhost:27017')
mycollection = myclient["positionData"]['missions']
mycollection1 = myclient["userData"]['accounts']

# 添加任务信息


@csrf_exempt
def add(request):
    if request.method == 'POST':
        arr = json.loads(request.POST['arr'])
        names = []
        for i in mycollection.find():
            names.append(i['name'])
        for info in arr:
            if info['name'] in names:
                pass
            else:
                mycollection.insert_one(info)
    return HttpResponse('添加成功')

# 删除任务信息


@csrf_exempt
def delete(request):
    if request.method == 'POST':
        arr = json.loads(request.POST['arr'])
        names = []
        for info in arr:
            names.append(info['name'])
        for i in mycollection.find():
            if i['name'] in names:
                pass
            else:
                mycollection.delete_one(i)
    return HttpResponse('删除成功')

# 获取任务信息


def get(request):
    contents = []
    for i in mycollection.find():
        info = {"name": i['name'], "longitude": i['longitude'],
                "latitude": i['latitude'], "zoom": i['zoom']}
        contents.append(info)
    data = {'data': contents}
    return JsonResponse(data)

# 渲染登录页面


def login(request):
    return render(request, 'login.html', {})

# 渲染注册页面


def register(request):
    return render(request, 'register.html', {})

# 添加用户信息


@csrf_exempt
def addUser(request):
    if request.method == 'POST':
        uname = eval(request.POST.get('username'))
        pword = eval(request.POST.get('password'))
        mycollection1.insert_one(
            {"username": uname, "password": pword})
        return JsonResponse({'status': '注册成功!'})

# 验证用户信息


@csrf_exempt
def main(request):
    # 验证是否为ajax请求
    def is_ajax(request):
        return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'
    # 验证登录账户

    def check(data):
        username = data['username']
        password = data['password']
        info = ''
        for i in mycollection1.find({'username': username}):
            info = i
        # 账户是否存在
        if info != '':
            # 账户密码是否正确
            if info['password'] == password:
                if is_ajax(request=request):
                    return JsonResponse({'data': '登录成功!'})
                return render(request, 'index.html', {})
            else:
                if is_ajax(request=request):
                    return JsonResponse({'data': '密码输入错误'})
                return render(request, 'login.html', {})
        else:
            if is_ajax(request=request):
                return JsonResponse({'data': '账号不存在,请前往注册'})
            return render(request, 'register.html', {})
    if request.method == 'POST':  # 请求类型为'POST'
        # 获取请求类型（登录或注册）
        status = request.POST.get('confirm')
        # 为了避免format请求与ajax请求因存在速度差异而导致的问题，故分别各获取了一次请求类型（以下同理）
        if is_ajax(request=request):
            status = json.loads(request.POST.get('confirm'))
        if status != 'login':
            # 注册验证
            uname = request.POST.get('userName')
            pword = request.POST.get('passWord')
            if is_ajax(request=request):
                uname = json.loads(request.POST.get('userName'))
                pword = json.loads(request.POST.get('passWord'))
            info = ''
            for i in mycollection1.find({'username': uname}):
                info = i
            # 验证用户是否存在
            if info != '':  # 存在则跳转登录界面
                if is_ajax(request=request):
                    return JsonResponse({'status': '账号已注册，请返回登录'})
                return render(request, 'login.html', {})
            else:  # 不存在则生成用户信息data
                data = {'username': uname,
                        'password': pword, 'status': '注册成功！'}
                if is_ajax(request=request):
                    return JsonResponse(data)
                if len(uname) >= 6 and len(pword) >= 6:
                    return render(request, 'index.html', {})
        else:
            # 登录验证
            uname = request.POST.get('userName')
            pword = request.POST.get('passWord')
            if is_ajax(request=request):
                uname = json.loads(request.POST.get('userName'))
                pword = json.loads(request.POST.get('passWord'))
            info = ''
            for i in mycollection1.find({'username': uname}):
                info = i
            # 验证用户是否存在
            if info == '':
                data = {'username': uname, 'password': pword}
                return check(data)
            else:
                return check({'username': uname, 'password': pword})
    else:  # 请求类型非'POST'（例如直接修改网页地址为'/main'）
        return render(request, 'login.html', {})
