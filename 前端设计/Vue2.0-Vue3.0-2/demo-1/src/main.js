import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// 全局配置axios的请求根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 把axios挂载到Vue.prototype上，供每个.vue组件的实例直接使用
Vue.prototype.$http = axios

// 今后，在每个.vue组件中要发起请求，直接调用this.$http.xxx
// 但是，把axios挂载到Vue原型上，有一个缺点，不利于API接口的复用！！

new Vue({
  render: (h) => h(App)
}).$mount('#app')
