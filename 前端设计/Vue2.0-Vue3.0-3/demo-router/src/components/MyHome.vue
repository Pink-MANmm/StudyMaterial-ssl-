<template>
  <div>
    <h3>MyHome组件</h3>
    <button @click="gotoMovie(3)">go to Movie</button>
    <router-link :to="{name:'mov',params:{id:3}}">goto Movie</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    gotoMovie(id) {
      //this.$router.push(`/movie/${id}`)
      this.$router.push({ name: 'mov', params: { id: 3 } })
    }
  }
}
</script>

<style>
</style>