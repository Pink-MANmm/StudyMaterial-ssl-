<template>
  <div>
    <h3>About组件</h3>
    <!-- 子级路由连接 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    
    <hr>

    <!-- 子级路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    height: 200px;
    background-color: blueviolet;
}
a{
    margin: 0 5px;
}
</style>