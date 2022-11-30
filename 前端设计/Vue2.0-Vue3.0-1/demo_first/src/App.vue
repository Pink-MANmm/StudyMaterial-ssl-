<template>
  <!-- 只能有一个div根节点，即template内只能有一个大div -->
  <div class="text-box">
    <p>{{ username }}</p>
    <button @click="changeName">修改用户名</button>
    <!-- 渲染Left组件和Right组件 -->
    <!-- 以标签形式，使用注册好的组件 -->
    <hr />
    <button @click="flag = !flag">Toggle Flag</button>
    <Test v-if="flag"></Test>
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
//导入需要使用的.vue组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

//默认导出。这是固定写法
export default {
  //data数据源
  //注意：vue组件中的data不能像之前一样，不能指向对象
  //注意：组件中的data必须是一个函数
  data() {
    //这个return出去的{}中，可以定义数据
    return {
      username: 'zs',
      flag: 'true'
    }
  },
  methods: {
    changeName() {
      //在组件中，this就表示当前组件的实例对象
      console.log(this)
      this.username = 'ls'
    }
  },
  //注册组件
  components: {
    Left,
    Right
  },
  //当前组件中的侦听器
  watch: {},
  //当前组件中的计算属性
  computed: {},
  //当前组件中的过滤器
  filters: {}
}
</script>

<!-- 要引入less语法，需要加入long="less" -->
<style lang="less" scoped>
.text-box {
  position: relative;
  height: 400px;
  background-color: pink;

  //当使用第三方组件库的时候（vant），如果有修改组件默认样式的需求，需要用到/deep/
  /deep/p {
    color: red;
  }
}
</style>
