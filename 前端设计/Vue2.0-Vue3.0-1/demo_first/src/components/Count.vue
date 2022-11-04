<template>
  <div id="count">
    <h5>count组件</h5>
    <p>count的值是:{{ count }}</p>
    <hr />
    <!-- 如果方法只有一行，则可以直接写在绑定事件里 -->
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  //props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  //自定义属性的名字，是封装者自定义的（只要名称合法即可）
  //props中的数据，可以直接在模板结构中被使用
  //注意：props是只读的，不能直接修改props的值，否则终端会报错！
  props: {
    init: {
      //如果外界使用Count的组件的时候，没有传递init属性，则默认值生效
      default: 0,
      //init的值类型必须是Number数字
      type: Number,
      //必填项校验
      required: true,
    },
  },
  data() {
    return {
      count: this.init,
    };
  },
  //methods: {
  //    add() {
  //        this.count += 1
  //    }
  //}
};
</script>

<style scoped>
#count {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 80%;
  width: 100%;
  background-color: aquamarine;
}
</style>