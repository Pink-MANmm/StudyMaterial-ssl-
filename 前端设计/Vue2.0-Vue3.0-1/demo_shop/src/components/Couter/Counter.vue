<template>
  <div class="number-container">
    <!-- 减1的按钮 -->
    <button type="button" class="btn" @click="del">-</button>
    <!-- 购买的数量 -->
    <div class="number-box">{{ num }}</div>
    <!-- 加1的按钮 -->
    <button type="button" class="btn" @click="add">+</button>
  </div>
</template>

<script>
import bus from "@/components/eventBus.js";

export default {
  props: {
    //接收商品的id值，将来，使用EventBus方案，把数量传递到App.vue的时候，需要通知App组件，更新哪个商品的数量
    id: {
      type: Number,
      required: true,
    },
    //接收到的num数量值
    num: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    //点击按钮，数值+1
    add() {
      const obj = { id: this.id, value: this.num + 1 };
      bus.$emit("share", obj);
    },
    del() {
      const obj = { id: this.id, value: this.num - 1 };
      bus.$emit("share", obj);
    },
  },
};
</script>

<style lang="less" scoped>
.number-container {
  padding: 0;
  width: 120px;
  height: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
  color: black;
}
.number-box {
  float: left;
  width: 40px;
  height: 30px;
  line-height: 30px;
}
.btn {
  margin: 0;
  padding: 0;
  float: left;
  width: 40px;
  height: 30px;
  color: black;
  background-color: rgb(232, 229, 229);
  border-radius: 2px;
}
</style>