<template>
  <div >
    <div>App根组件</div>

    <hr />

    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  components: {
    Left,
    Right
  }
}
</script>

<style></style>
