from cmath import log
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.shortcuts import render, redirect, reverse
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


@csrf_exempt
def enter(request):
    if request.method == 'POST':
        pass


@csrf_exempt
def main(request):
    def is_ajax(request):
        return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'

    def check(data):
        username = data['username']
        password = data['password']
        info = ''
        for i in mycollection1.find({'username': username}):
            info = i
        if info != '':
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
    if request.method == 'POST':
        status = request.POST.get('confirm')
        if is_ajax(request=request):
            status = json.loads(request.POST.get('confirm'))
        if status != 'login':
            uname = request.POST.get('userName')
            pword = request.POST.get('passWord')
            if is_ajax(request=request):
                uname = json.loads(request.POST.get('userName'))
                pword = json.loads(request.POST.get('passWord'))
            info = ''
            for i in mycollection1.find({'username': uname}):
                info = i
            if info != '':
                if is_ajax(request=request):
                    return JsonResponse({'status': '账号已注册，请返回登录'})
                return render(request, 'login.html', {})
            else:
                data = {'username': uname,
                        'password': pword, 'status': '注册成功！'}
                if is_ajax(request=request):
                    return JsonResponse(data)
                if len(uname) >= 6 and len(pword) >= 6:
                    return render(request, 'index.html', {})
                else:
                    return render(request, 'register.html', {})
        else:
            uname = request.POST.get('userName')
            pword = request.POST.get('passWord')
            if is_ajax(request=request):
                uname = json.loads(request.POST.get('userName'))
                pword = json.loads(request.POST.get('passWord'))
            info = ''
            for i in mycollection1.find({'username': uname}):
                info = i
            if info == '':
                data = {'username': uname, 'password': pword}
                return check(data)
            else:
                return check({'username': uname, 'password': pword})
    else:
        return render(request, 'login.html', {})


@csrf_exempt
def addUser(request):
    if request.method == 'POST':
        uname = eval(request.POST.get('username'))
        pword = eval(request.POST.get('password'))
        print(uname, pword)
        mycollection1.insert_one(
            {"username": uname, "password": pword})
        return JsonResponse({'status': '注册成功!'})


def register(request):
    return render(request, 'register.html', {})


def get(request):
    contents = []
    for i in mycollection.find():
        info = {"name": i['name'], "longitude": i['longitude'],
                "latitude": i['latitude'], "zoom": i['zoom']}
        contents.append(info)
    data = {'data': contents}
    return JsonResponse(data)


def login(request):
    return render(request, 'login.html', {})
