import Vue from 'vue'
import App from './App.vue'
//导入路由模块，目的：导入路由的实例对象
//在进行模块化导入的时候，如果给定的是文件夹，则默认导入这个文件夹下，名字叫做index.js的文件
import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //在Vue项目中，要想把路由用起来，必须把路由实例对象，通过下面的方式进行挂载
  //router:路由的实例对象
  router:router
}).$mount('#app')
