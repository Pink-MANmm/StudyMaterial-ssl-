<template>
  <div>
    <keep-alive include="Home">
      <router-view />
    </keep-alive>

    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped></style>
