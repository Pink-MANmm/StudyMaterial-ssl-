<template>
  <div class="app-container">
    <div>App根组件</div>
    <div class="link">  
      <a href="#/home">首页</a>
      <a href="#/movie">电影</a>
      <a href="#/about">关于</a>
    </div>

    <hr>

    <component :is="comName"></component>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Movie from '@/components/Movie.vue'

export default {
  data(){
    return {
      comName:'Home'
    }
  },
  created(){
    //只要当前的App组件一被创建，就立即监听window对象的onhashchange事件
    window.onhashchange=()=>{
      switch(location.hash){
        case '#/home':
          this.comName='Home'
          break
        case '#/movie':
          this.comName='Movie'
          break
        case '#/about':
          this.comName='About'
          break
      }
    }
  },
  components:{
    Home,
    About,
    Movie
  }
}
</script>

<style scoped>
  .link{
    width: 200px;
    height: 30px;
    line-height: 30px;
  }
  a{
    margin: 0px 5px;
  }
</style>