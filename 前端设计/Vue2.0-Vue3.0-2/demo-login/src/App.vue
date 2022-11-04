<template>
  <div class="app-container">
    <!-- 占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'MyApp'
}
</script>

<style lang='less' scoped>
.app-container{
  width: 100%;
  height: 100%;
}
</style>