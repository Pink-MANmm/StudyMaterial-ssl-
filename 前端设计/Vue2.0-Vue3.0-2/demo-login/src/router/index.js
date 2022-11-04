import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from './pathArr'

//导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        //登录的路由规则
        { path: '/login', component: Login },
        //后台主页的路由规则
        {
            path: '/home', component: Home, children: [
                { path: '', redirect: 'users' },
                { path: 'users', component: Users },
                { path: 'rights', component: Rights },
                { path: 'goods', component: Goods },
                { path: 'orders', component: Orders },
                { path: 'settings', component: Settings },
                //用户详情页的规则
                { path: 'userinfo/:id', component: UserDetail, props: true }
            ]
        }
    ]
})

//全局强制守卫
router.beforeEach((to, from, next) => {
    if (pathArr.indexOf(to.path) !== -1) {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router