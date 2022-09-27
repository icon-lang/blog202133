<template>
  <div id="root">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name : "App"
  }
</script>

<style lang="less">
  @import "assets/css/reset.css";
  @import "assets/css/font.css";
  #root{
    width: 100%;
    background: url("./assets/img/bg.jpg") center top/cover fixed;
  }
</style>
