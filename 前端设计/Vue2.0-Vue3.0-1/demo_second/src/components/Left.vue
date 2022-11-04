<template>
  <div class="left">
    <h3>Left组件 --- {{ count }}</h3>
    <button @click="count += 1">+1</button>
    <button @click="resetCount">重置</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    resetCount() {
      this.count = 0;
    },
  },
};
</script>

<style>
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: orange;
}
</style>