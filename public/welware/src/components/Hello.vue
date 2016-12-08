<template>
  <div class="hello">
  <div id="headlogo">
    　<div id="tablerow">
      <div id="logo1">
         <img src="../assets/logo.png" alt="logo" />
      </div>
    　  <div id="logo2">
    　    男性公益协会 <br>
          MALE HEALTH
    　  </div>
    　</div>
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
        font-size: 50px;
        font-weight: bolder;

        }

#headlogo { position: absolute;}

#rule     { background-color: #E00000;
            width: 290px;
            height: 80px;
            position: absolute;
            left: 140px;
            top:1350px;
            text-align: center;
            color: white;
            font-weight: 900;
            border-radius: 10px;
            border-style: groove;}

#contact { background-color: #9c3;
           width: 290px;
           height: 80px;
           position: absolute;
           left: 550px;
           top:1350px;
           text-align: center;
           color: white;
           font-weight: bold;
           border-radius: 10px;
           border-style: groove;}

div#headlogo { display: table;}

div#tablerow { display: table-row;}

div#logo1 { display: table-cell;
            width: 50px;}

div#logo2 { display: table-cell;
            font-size: 20px;
            padding: 0px;
            margin: 0px;}

a:link  {color: white;
         text-decoration: none;}
a:visited{color: white;
          text-decoration: none;}
</style>


