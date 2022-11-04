<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <MyHeader></MyHeader>
    <!-- 页面主题区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏 -->
      <MyAside></MyAside>
      <!-- 右侧内容主题区域 -->
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './subcomponents/MyHeader.vue'
import MyAside from './subcomponents/MyAside.vue'

export default {
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style lang='less' scoped>
.home-container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main-box {
    position: absolute;
    top: 5%;
    width: 100%;
    height: 95%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1; //让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容
    }
  }
}
</style>