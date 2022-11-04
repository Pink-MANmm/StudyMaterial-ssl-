<template>
  <div id="left">
    Left组件
    <MyCount :init="9"></MyCount>
  </div>
</template>

<style scoped>
#left {
  position: absolute;
  height: 40%;
  background-color: orange;
  bottom: 0;
  width: 50%;
}
</style>