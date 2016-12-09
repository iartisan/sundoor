<template>
  <div id="app">
    <div id="headlogo">
      <span id="logo1">男性健康公益协会 </span><br>
      <span id="logo2">MALE HEALTH</span>
    </div>
    <div id="nav">
      <router-link to='/'>活動</router-link>
      <router-link to='/foo'>foo</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
html, body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}

#headlogo { position: absolute;
            z-index: 999;
            background-image: url(./assets/logo.png);
            background-repeat: no-repeat;
            background-size: 110px 55px;
            background-position: -10px -4px;
            font-size: 15px;
            height: 45px;
            width: 100%;
            background-color: white;  }

#logo1    { color: #2F4F4F;
            position: relative;
            margin: 60px 0px 20px 52px;
            top: 7px;}

#logo2    { position: relative;
            margin: 60px 0px 20px 60px;
            top: 5px;}

#nav{
  position: absolute;
  top:20px;
  right: 20px;
  color: #fff;
  background-color: yellow;
  z-index:999;
}
</style>
