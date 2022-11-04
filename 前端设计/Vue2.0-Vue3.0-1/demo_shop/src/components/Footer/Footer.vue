<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="cbFull"
        :checked="isfull"
        @change="fullChange"
      />
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>
    <!-- 中间的合计 -->
    <div>
      <span>合计</span>
      <span class="total-price">￥{{ amount.toFixed(2) }}</span>
    </div>
    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">
      结算 {{ all }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    //全选的状态
    isfull: {
      type: Boolean,
      default: true,
    },
    amount: {
      type: Number,
      default: 0,
    },
    all: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    fullChange(e) {
      //监听了全选的状态
      this.$emit("full-change", e.target.checked);
    },
  },
};
</script>

<style>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #efefef;
}
.btn {
  border: none;
  height: 40px;
  width: 100px;
  margin: 0 10px;
  border-radius: 20px;
  background-color: blue;
  color: white;
}
</style>