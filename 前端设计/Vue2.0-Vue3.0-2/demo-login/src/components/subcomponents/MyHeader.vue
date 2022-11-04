<template>
  <div class="header-container">
    <div class="logo">黑马程序员</div>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    logout() {
      //1.清空token
      localStorage.removeItem('token')
      //2.跳转到登录页面
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='less' scoped>
.header-container {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 5%;
  border-bottom: 1px solid gray;
}
button {
  margin: 0 5px;
  position: absolute;
  right: 0;
  height: 90%;
}
</style>