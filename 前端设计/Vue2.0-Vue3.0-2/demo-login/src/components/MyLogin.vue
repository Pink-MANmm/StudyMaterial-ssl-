<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="">
      </div>
      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">的登录名称</label>
          <input type="text" class="form-control ml-2" id="username" placeholder="请输入登录名称" autocomplete="off" v-model.trim="username">
        </div>
        <!-- 登录密码 -->
        <div class="for-group form-inline">
          <label for="password">登录密码</label>
          <input type="password" class="form-control ml-2" id="password" placeholder="请输入登录密码" v-model.trim="password">
        </div>
        <!-- 登陆和重置按钮 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-secondary mr-2" @click="reset">重置</button>
          <button type="button" class="btn btn-primary" @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    reset() {
      ;(this.username = ''), (this.password = '')
    },
    login() {
      if (this.username === 'admin' && this.password === '666666') {
        //登陆成功
        //1.存储token
        localStorage.setItem('token', 'Bearer xxxx')
        //2.跳转到后台主页
        this.$router.push('/home')
      } else {
        //登陆失败
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style lang='less' scoped>
.login-container {
  background-color: #35495e;
  position: relative;
  height: 100%;
  width: 100%;
  .login-box {
    width: 40%;
    height: 40%;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 30%;
    top: 40%;
  }
}
img {
  width: 100%;
  height: 100%;
}
.avatar-box {
  margin: 0 auto;
  width: 20%;
  overflow: hidden;
  height: 20%;
}
</style>