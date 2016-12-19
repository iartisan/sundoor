<template>
  <div id="app">
    <div id="headlogo">
      <span id="logo1">男性健康公益协会 </span><br>
      <span id="logo2">MALE HEALTH</span>
    </div>
    <div id="nav">
      <router-link to='/'>活動</router-link>
      <router-link to='/congratulation'>恭喜</router-link>
      <router-link to='rank'>排名</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  function getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    } else {
      return null
    }
  }

  export default {
    name: 'app',
    data: function () {
      return {
        openId: 'fuck your'
      }
    },
    computed: {
    },
    created: function () {
      console.log('im getting openid' + this.openId)
      this.$store.commit('getOpenId', this.openId)
      // todo get openID in production
      if (!getQueryString('code')) {
        window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfac68d0e2faf11ab&redirect_uri=http%3A%2F%2Fwww.51upali.com&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
      } else {
        this.$http.get('/welcome/web_openid?code=' + getQueryString('code')).then((response) => {
          console.log(response.body.access_token)
        }, (error) => {
          console.log(error)
        })
      }
    }
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
ul, menu, dir {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
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
