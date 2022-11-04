<template>
  <div>
    <!-- this.$route是路由的"参数对象" -->
    <!-- this.$router是路由的"导航对象" -->
    <h3>Movie组件---{{ this.$route.params.id }}---{{ id }}</h3>
    <button @click="showThis">打印this</button>
    <button @click="goback">后退</button>
    <!-- 在行内使用编程式导航跳转的时候，this必须要省略，否则会报错 -->
    <button @click="$router.back()">back 后退</button>
    <button @click="$router.forward()">forward 前进</button>
  </div>
</template>

<script>
export default {
  //接收props数组
  props:[
    'id'
  ],
  methods:{
    showThis(){
      console.log(this);
    },
    goback(){
      //go(-1)表示后退一层
      //如果后退的层数超过上限，则原地不动
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
    div{
        height: 200px;
        background-color: brown;
    }
</style>