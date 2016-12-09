<template>
  <div id="swear">
   <div id="slogan">
      <img id="slogan1" src="../assets/slogan1.png" alt="slogan" />
   </div>
   <div class="slogan2">
     <span id="wo" class="slogan22">我</span>
     <span id="fa" class="slogan22">发</span>
     <span id="shi" class="slogan22">誓</span>
     <span id="jin" class="slogan22">今</span>
    </div>
   <div class="slogan3">
       <span id="tian" class="slogan22">天</span>
       <span id="mei" class="slogan22">没</span>
       <span id="you" class="slogan22">有</span>
       <span id="lu" class="slogan22">撸</span>
   </div>
  <div id="inputbg">
    <div class="input-append">
  <input class="span2" id="appendedInputButton" type="text"
         placeholder="输入你的微信号领取红包" style="width:230px;height:27px">
  <button class="btn btn-large btn-primary" id="btn" type="button"
         style="width:100px;height:33px">
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
#swear {background-image: url(../assets/bgimg2.png);
         background-repeat: repeat;
         background-size: 100% 100%;
         position: relative;
         width: 100%;
         height: 100%;
         font-size: 12px;}

#slogan{ padding: 85px 0 0 0;}

#slogan1 { width: 300px;
           height: 50px;
           margin: 0 33px;}

.slogan2 { color: white;
           font-size: 3.5em;
           font-weight: bolder;
           padding: 8px;
           margin: 8px 22px;}

.slogan3 { color: white;
           font-size: 3.5em;
           font-weight: bolder;
           padding: 8px;
           margin: 8px 22px;}

.slogan22 { border-style: solid;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            padding: 3px 11px;
            border-color: rgba(255,255,255,0.5);}

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
          border-radius: 10px;
          margin: 23px 4px;}

#appendedInputButton { width: 60%;
                       height: 10%;
                       position: relative;
                       top: 15px;
                       left: 18px;}

#btn { color: white;
       font-size: 1.3em;
       font-weight: bolder;
       background-color: #FF4500;
       border-style: none;
       border-top-right-radius: 5px;
       border-bottom-right-radius: 5px;
       position: relative;
       top: 16px;
       left: 14px;}

h2 {margin: 0 0 0 5px;}

p {margin: 0 10px 0 10px;}

#support { background-color: #9c3;
           width: 120px;
           height: 33px;
           margin: 23px 40px 13px 125px;;
           text-align: center;
           line-height: 33px;
           font-size: 1.3em;
           color: white;
           font-weight: bold;
           border-radius: 10px;
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
