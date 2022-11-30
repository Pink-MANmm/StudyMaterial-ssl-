//1.从vue-router中按需导入两个方法
//  createRouter方法用于创建路由的实例对象
//  createWebHshHistory用于指定路由的工作模式（hash模式）
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/MyHome.vue'
import Movie from './components/MyMovie.vue'
import About from './components/MyAbout.vue'
import Tab1 from './components/Tab1.vue'
import Tab2 from './components/Tab2.vue'

const router = createRouter({
    //3.1.通过history属性指定路由的工作模式
    history: createWebHashHistory(),
    //3.2.通过routes数组，指定路由规则
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/movie/:id', name: 'mov', component: Movie, props: true },
        {
            path: '/about',
            component: About,
            redirect: '/about/tab1',
            children: [
                { path: 'tab1', component: Tab1 },// 访问/about/tab1时，展示Tab1组件
                { path: 'tab2', component: Tab2 },// 访问/about/tab2时，展示Tab2组件
            ]
        }
    ]
})

//声明全聚德导航守卫
router.beforeEach(() => {
    console.log('ok')
})

export default router