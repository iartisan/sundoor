<template>
  <div  id="congratulation">
    <div>
       <img id="qiandao" src="../assets/qiandao.png" alt="签到成功" />
    </div>
    <p id="zhuanzhang">
      我们的工作人员会在3小时内会通过微信向你发放红包 <br>
      请注意留意你的微信账号添加好友请求哦！
    </p>
    <hr style='border:1px dashed #000' width='100%' size='1' />
    <p>
      此活动由中国男性健康公益协会主办 <br>
      陈文伯戒撸团队提供全力支持
    </p>
<div id="erweima">
  <div id="erweima1">
    <img id="chenwenbo" src="../assets/chenwenbo.png" alt="陈文伯微信二维码" />
    <p>
      关注陈文伯咨询微信号<br>
      随时随地咨询专家
    </p>
  </div>
 <div id="erweima2">
   <img id="gongzhonghao" src="../assets/gongzhonghao.png" alt="公众号微信二维码" />
   <p　class="guanzhu">
     关注活动公众号<br>
     免得领钱找不到网站
   </p>
   </div>
</div>
  </div>
</template>
<style scoped>
#congratulation { background-image: url(../assets/bgimg2.png);
                  background-repeat: repeat;
                  width: 100%;
                  height: 100%;
                  font-size: 13.5px;}

#qiandao { width: 90%;
           height: 2%;
           position: relative;
           top: 1%;
           left: 5%;}

p { line-height: 1.5em;
    text-align: center;
    font-weight: bold;
    margin-top: 2.5%;}

hr { margin: 6% 0;}

#erweima { float:left;
           border:1px;
           width:100%;}

#erweima1 {float:left;
           width:42.5%;
           margin: 4% 5%;
           }

#erweima2 { float:right;
            border:1px;
            width:42.5%;
            margin-top: 4%;
            margin-right: 3%;}

#chenwenbo {width: 90%;
            height: 20%;}

#gongzhonghao {width: 90%;
               height: 20%;}


</style>
<script>
    export default{
    }
</script>
