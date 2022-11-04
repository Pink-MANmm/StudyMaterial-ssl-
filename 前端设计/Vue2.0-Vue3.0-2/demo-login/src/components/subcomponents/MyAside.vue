<template>
  <div class="aside-container">
    <ul>
      <li class="menu-item">
        <router-link to="/home/users">用户管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/rights">权限管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/goods">商品管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/orders">订单管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/settings">系统管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.aside-container {
  position: relative;
  width: 30%;
  height: 100%;
  border-right: 1px solid gray;
}
ul {
  width: 100%;
  height: 100%;
  padding: 0;
}
li {
  list-style: none;
  width: 100%;
  height: 8%;
  border-bottom: 1px solid gray;
  text-align: center;
}
a {
  color: black;
  text-decoration: none;
}
</style>