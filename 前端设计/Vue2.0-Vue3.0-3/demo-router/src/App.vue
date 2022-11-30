<template>
  <div>
    <h1>App 组件</h1>
    <!-- 声明路由链接 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie/1">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link>
    <router-link to="/about">关于</router-link>

    <!-- 声明路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>