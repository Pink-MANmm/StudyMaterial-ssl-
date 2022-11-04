<template>
  <div class="app-container">
    <h1>App组件</h1>

    <!-- 当安装和配置了vue-router后，就可以使用router-link来替代普通的a连接了 -->
    <!-- <a href="#/home">首页</a> -->
    <!-- <a href="#/movie">电影</a> -->
    <!-- <a href="#/about">关于</a> -->
    <router-link to="/home">首页</router-link>
    <!-- 注意1：在hash地址中，/后面的参数项，叫做"路径参数" -->
    <!-- 在路由"参数对象"中，需要使用this.$route.params来访问路径参数 -->
    <!-- 注意2：在hash地址中，?后面的参数项，叫做"查询参数" -->
    <!-- 在路由"参数对象"中，需要使用this.$route.query来访问查询参数 -->
    <!-- 注意3：在thiss.$route中，path只是路径部分：fullPath是完整的地址 -->
    <!-- 例如： -->
    <!-- /movie/2?name=zs&age=20是fullPath的值 -->
    <!-- /movie/2是path -->
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2?name=zs&age=20">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
    <router-link to="/about">关于</router-link>

    <hr>

    <!-- 只要在项目中安装和配置了vue-router，就可以使用router-view这个组件了 -->
    <!-- 它的作用很单纯：占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  a{
    margin: 0 10px;
  }
</style>
