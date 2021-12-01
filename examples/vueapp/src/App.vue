<template>
  <div style="text-align:center;">
    <h1>vue3</h1>
    <span style="color:red;">(无法加载路由的内容，点击路由无法跳转)</span>
  </div>
    <router-link to="/home" style="margin-right:10px;">Home</router-link>
    <router-link to="/demo" style="margin-right:10px;">Demo</router-link>
    <router-link to="/user" style="margin-right:10px;">User</router-link>
    <router-view/>
</template>

<script>

window.onerror = function(message) { 
  alert(message)
 }
export default {
  name: 'App',
  components: {
  },
  
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
#app {
}
</style>
