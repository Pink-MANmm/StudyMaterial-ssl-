<template>
  <div>
    <h3>Home组件</h3>
    <hr>
    <button @click="gotoLK">通过push,跳转到"洛基"</button>
    <button @click="gotoLK2">通过replace,跳转到"洛基"</button>
    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  methods:{
    gotoLK(){
      //通过编程式导航API，导航跳转到指定的页面
      this.$router.push('/movie/1')
    },
    gotoLK2(){
      this.$router.replace('/movie/1')
    }
  }
}
</script>

<style scoped>
    div{
        height: 200px;
        background-color: aqua;
    }
</style>