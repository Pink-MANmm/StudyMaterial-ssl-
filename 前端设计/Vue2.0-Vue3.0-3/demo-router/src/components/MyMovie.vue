<template>
  <div>
    <h3>MyMovie组件---{{ id }}</h3>
    <button @click="goBack">后退</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    goBack() {
      this.$router.go(-1) //后退到之前的组件页面
    }
  }
}
</script>

<style>
</style>