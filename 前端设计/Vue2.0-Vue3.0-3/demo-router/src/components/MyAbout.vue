<template>
  <div>
    <h3>MyAbout组件</h3>
    <!-- 在关于页面中，声明两个子路由链接 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <!-- 在关于页面中，声明tab1和tab2的路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>