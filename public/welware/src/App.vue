<template>
  <div id="app">
    <div id="nav">
      <router-link to='/hello'>hello</router-link>
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
  font-size: 50px;
}
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#nav{
  position: absolute;
  top:20px;
  right: 20px;
  color: #fff;
  background-color: yellow;
  z-index:999;
}
</style>
