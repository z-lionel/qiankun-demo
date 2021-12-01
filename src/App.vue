<template>
  <div>
    <div style="text-align:center;margin-bottom:20px;">
      <h1> main-app:vue3</h1>
       <p style="text-align:center;">
         主应用调用 navigateToUrl 没有自动跳转,点击下方导航栏查看效果,react17可以加载路由的内容，
         vue3没办法加载，调试面板会有报错信息。
       </p>
    </div>
   
    <div style="display:flex;width:800px;margin:0 auto;">
      <div style="width:100px;">
        <ul>
          <li @click="goto('/react17')">react17</li>
          <li @click="goto('/vue3')">vue3</li>
        </ul>
      </div>
      <div id="container" style="flex:1;"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
  mounted() {
  },
  methods: {
    goto(subapp){
      history.pushState(null, subapp, subapp)
    }
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
li{
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ddd;
  list-style: none;
  margin-bottom: -1px;
}
#container{
  margin-left:10px;
  border: 1px solid #ddd;
  padding:20px;
}
#app {
  /* height: 100vh; */
}
</style>
