<template>
  <div class="app-container">
    <h1 ref="myh1">APP根组件</h1>
    <button @click="showThis">打印this</button>
    <button @click="onReset">重置Left组件的count值为0</button>
    <hr />

    <input type="text" v-if="inputVisible" @blur="showButton" ref="iptRef" />
    <button v-else @click="showInput">显示输入框</button>

    <hr />
    <div class="box">
      <!-- 渲染Left组件和Right组件 -->
      <Left ref="comLeft"></Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";

export default {
  data() {
    return {
      //控制输入框和按钮的按需切换
      //默认值为false，表示默认展示按钮，隐藏输入框
      inputVisible: false,
    };
  },
  methods: {
    showThis() {
      //当前APP组件的实例对象
      this.$refs.myh1.style.color = "red";
    },
    //点击按钮，重置Left组件的count值
    onReset() {
      //this.$refs.comLeft.resetCount()
      this.$refs.comLeft.count = 0;
    },
    showInput() {
      this.inputVisible = true;
      //让展示出来的文本框，自动获取焦点
      this.$nextTick(() => {
        this.$refs.iptRef.focus();
      });
    },
    showButton() {
      this.inputVisible = false;
    },
  },
  components: {
    Left,
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
.app-container {
  position: relative;
  height: 100%;
}
.box {
  height: 30%;
  position: relative;
}
</style>
