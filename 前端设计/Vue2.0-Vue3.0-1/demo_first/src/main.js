//导入vue这个包，得到Vue构造函数
import Vue from 'vue'
//导入App.vue根组件，将来要把App.vue中的模板结构，渲染到HTML页面中
import App from './App.vue'
//导入需要被全局注册的那个组件
import Count from '@/components/Count.vue'
import Test from '@/components/Test.vue'
Vue.component('MyCount', Count)
Vue.component('Test', Test)

Vue.config.productionTip = false

//创建Vue的实例对象
new Vue({
  //el:'#app',
  //把render函数指定的组件，渲染到HTML页面中
  render: h => h(App),
}).$mount('#app')

//Vue实例的$mount()作用和属性el完全一致！