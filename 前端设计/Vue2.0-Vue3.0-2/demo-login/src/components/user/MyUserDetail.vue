<template>
  <div class="userDetail-container">
    <button class="back" @click="$router.back()">后退</button>
    <h2>用户信息---{{id}}</h2>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style lang='less' scoped>
.userDetail-container {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}
button {
  width: 60px;
  height: 30px;
  font: normal 20px/25px '';
  position: absolute;
  left: 0;
  top: 0;
}
</style>