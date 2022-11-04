<template>
  <div class="left-container">
    <h3>Left组件</h3>
    <button @click="getInfo">发起GET请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    }
  }
}
</script>

<style>
</style>
