<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-link to="/mine">我的</router-link>
    <router-view></router-view>
  </div>
</template>
<style>
    .router-link-active{
      color: red;
    }
    .router-link-exact-active{ 
      color:blue;
    }
</style>

<script>


export default {
  
}
</script>