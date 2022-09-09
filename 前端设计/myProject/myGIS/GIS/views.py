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

def get(request):
    contents=[]
    for i in mycollection.find():
        info={"name":i['name'],"longitude":i['longitude'],"latitude":i['latitude'],"zoom":i['zoom']}
        contents.append(info)
    data = {'data': contents}
    return JsonResponse(data)


def main(request):
    return render(request, 'index.html', {})
