<template>
  <div class="right-container">
    <h3>Right组件</h3>
    <button @click="postInfo">发起POST请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    async postInfo () {
      const { data: res } = await this.$http.post('/api/post', { name: 'zs', age: 20 })
      console.log(res)
    }
  }
}
</script>

<style>
</style>
