<template>
  <div id="right">
    Right组件
    <MyCount :init="6"></MyCount>
  </div>
</template>

<style scoped>
#right {
  position: absolute;
  height: 40%;
  background-color: aqua;
  bottom: 0;
  right: 0;
  width: 50%;
}
</style>