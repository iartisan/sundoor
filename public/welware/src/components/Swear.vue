<template>
  <div id="swear">
    <img id="slogan1" src="../assets/slogan1.png" alt="slogan" />
    <div id="slogan">
        <span>  <button id="wo" type="button" class="slogan2">我</button>  </span>
        <span>  <button id="fa" type="button" class="slogan2">发</button>  </span>
        <span>  <button id="shi" type="button" class="slogan2">誓</button>  </span>
        <span>  <button id="jin" type="button" class="slogan2">今</button>  </span>
        <span>  <button id="tian" type="button" class="slogan2">天</button>  </span>
        <span>  <button id="mei" type="button" class="slogan2">没</button>  </span>
        <span>  <button id="you" type="button" class="slogan2">有</button>  </span>
        <span>  <button id="lu" type="button" class="slogan2">撸</button>  </span>
    </div>

  <div id="inputbg">
    <div class="input-append">
  <input class="span2" id="appendedInputButton" type="text"
         placeholder="输入你的微信号领取红包" style="width:60%;height:27px">
  <button class="btn" id="btn" type="button"
         style="width:32%;height:33px">
    领取红包</button>
  </div>
  </div>
<h2>活动规则：</h2>
<p>
1.参与者需诚实守信，为自己的健康负责； <br>
2.主办方每天安排100000红包随机发放，一年不撸的参与者，10万奖金； <br>
3.参与者若中途停止戒撸一天，则惩罚其一周内无法参与活动。之前的成绩作废，一周后重新计算。
</p>
<div id="support">
  <a href="#" target="_blank">支持我们</a>
</div>
<div>
  <p id="footer">
    注：支持我们可领取更大的每日红包哦
  </p>
</div>
  </div>
</template>
<style scoped>
#slogan1 { width: 80%;
           height: 8%;
           margin-left: 2rem;
           padding-top: 4rem;}

#slogan { width: 90%;
          height: 10%;
          padding-top: 3%;
          padding-bottom: 25%;
          margin: 0 auto;
          }
#slogan span {
  padding: 0;
}


button.slogan2 {
  width: 22%;
  font-size: 1.5rem;
  line-height: 3.8rem;
  color: white;
  border-radius:6rem;
  padding:0;
  margin:2px;
}

#swear {background-image: url(../assets/bgimg2.png);
         background-repeat: repeat;
         background-size: 100% 100%;
         position: relative;
         width: 100%;
         height: 100%;
         font-size: 13px;}

#wo { background-color: #FF4500;}
#fa { background-color: #FFD700;}
#shi { background-color: #32CD32;}
#jin { background-color: #4682B4;}
#tian { background-color: #FF00FF;}
#mei { background-color: #6495ED;}
#you { background-color: #8A2BE2;}
#lu { background-color: #FF1493;}

#inputbg {background-color: rgba(255,255,255,0.6);
          width: 98%;
          height: 10%;
          border-radius: 0.6rem;
          margin: 7% 1%;}

#appendedInputButton { position: relative;
                       margin-top: 4%;
                       left: 3%;
                       border-top-right-radius: 0;
                       border-bottom-right-radius: 0;
                       }

#btn { color: white;
       font-size: 1.2em;
       line-heihgt: 1.3em;
       font-weight: bolder;
       background-color: #FF4500;
       border-style: none;
       border-top-right-radius: 0.4rem;
       border-bottom-right-radius: 0.4rem;
       position: relative;
       margin-top: 4%;
       left: 2%;}

h2 {margin: 0 0 0 2%;}

p {margin: 0 3% 0 3%;}

#support { background-color: #9c3;
           width: 120px;
           height: 33px;
           margin: 4% auto 4% auto;
           text-align: center;
           line-height: 2.2rem;
           font-size: 1.3em;
           color: white;
           font-weight: bold;
           border-radius: 0.6rem;
           border-style: none;}

a:link  { color: white;
          text-decoration: none;}
a:visited{ color: white;
           text-decoration: none;}

#footer {text-align: center;}

</style>
<script>
  export default {
    name: 'swear'
  }
</script>
