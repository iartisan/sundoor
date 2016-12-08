<template>
  <div class="hello">
  <div id="headlogo">
    　    <span id="logo1">男性健康公益协会 </span><br>
          <span id="logo2">MALE HEALTH</span>
    　</div>
  <div id="rule">
    <a href="#" target="_blank">活动规则</a>
  </div>
  <div id="contact">
    <a href="#" target="_blank">支持我们</a>

  </div>
</div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {background-image: url(../assets/bgimg.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        width: 100%;
        height: 100%;
        font-size: 19px;
        font-weight: bolder;}

#headlogo { position: relative;
            background-image: url(../assets/logo.png);
            background-repeat: no-repeat;
            background-size: 110px 55px;
            background-position: -10px -4px;
            font-size: 15px;
            height: 45px;
            background-color: white;  }

#logo1    { color: #2F4F4F;
            position: relative;
            margin: 60px 0px 20px 52px;
            top: 7px;}

#logo2    { position: relative;
            margin: 60px 0px 20px 60px;
            top: 5px;}

#rule     { background-color: #E00000;
            width: 120px;
            height: 33px;
            position: absolute;
            left: 11%;
            top: 77%;
            text-align: center;
            color: white;
            font-weight: 900;
            border-radius: 10px;
            border-style: groove;}

#contact { background-color: #9c3;
           width: 120px;
           height: 33px;
           position: absolute;
           left: 57%;
           top: 77%;
           text-align: center;
           color: white;
           font-weight: bold;
           border-radius: 10px;
           border-style: groove;}

a:link  {color: white;
         text-decoration: none;}
a:visited{color: white;
          text-decoration: none;}
</style>
