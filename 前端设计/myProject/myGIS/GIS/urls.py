from django.urls import path  # 导入路径相关配置
from . import views  # 导入视图views

urlpatterns = [
    path('',views.main,name='main'),
    path('get/', views.get, name='get'),  # 默认访问book业务的首页
    path('add/', views.add, name='add'),
    path('delete/', views.delete, name='delete')
]
