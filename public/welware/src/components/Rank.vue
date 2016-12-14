<template>
<div id="rank">
  <div class="content">
     <ul id="liebiao">
       <li class="hang">
         <table cellspacing="0" cellpadding="0" class="biao" >
           <tr>
             <td class="xuliehao"  rowspan="2" > 1 </td>
             <td class="touxiang"  rowspan="2">
              <img class="touxiang1" src="../assets/biaoqing.jpg" alt="头像" />
             </td>
             <td  class="name">罗大可</td>
             <td class="tianshu">已经连续戒撸<em>32</em>天</td>
           </tr>
           <tr>
             <td class="diqu"> &#40;来自湖南长沙 &nbsp; 二戒&#41;  </td>
             <td class="jine">领取红包总额<em>122.11</em>元</td>
           </tr>
         </table>
       </li>
       <li class="hang">
         <table cellspacing="0" cellpadding="0" class="biao" >
           <tr>
             <td class="xuliehao"  rowspan="2" > 2 </td>
             <td class="touxiang"  rowspan="2">
              <img class="touxiang1" src="../assets/biaoqing.jpg" alt="头像" />
             </td>
             <td  class="name">罗二可</td>
             <td class="tianshu">已经连续戒撸<em>32</em>天</td>
           </tr>
           <tr>
             <td class="diqu"> &#40;来自湖北武汉 &nbsp; 二戒&#41;  </td>
             <td class="jine">领取红包总额<em>122.11</em>元</td>
           </tr>
         </table>
       </li>
       <li class="hang">
         <table cellspacing="0" cellpadding="0" class="biao" >
           <tr>
             <td class="xuliehao"  rowspan="2" > 3 </td>
             <td class="touxiang"  rowspan="2">
              <img class="touxiang1" src="../assets/biaoqing.jpg" alt="头像" />
             </td>
             <td  class="name">罗三可</td>
             <td class="tianshu">已经连续戒撸<em>32</em>天</td>
           </tr>
           <tr>
             <td class="diqu"> &#40;来自湖南长沙 &nbsp; 二戒&#41;  </td>
             <td class="jine">领取红包总额<em>122.11</em>元</td>
           </tr>
         </table>
       </li>
       <li class="hang">
         <table cellspacing="0" cellpadding="0" class="biao" >
           <tr>
             <td class="xuliehao"  rowspan="2" > 4 </td>
             <td class="touxiang"  rowspan="2">
              <img class="touxiang1" src="../assets/biaoqing.jpg" alt="头像" />
             </td>
             <td  class="name">罗四可</td>
             <td class="tianshu">已经连续戒撸<em>32</em>天</td>
           </tr>
           <tr>
             <td class="diqu"> &#40;来自湖南长沙 &nbsp; 二戒&#41;  </td>
             <td class="jine">领取红包总额<em>122.11</em>元</td>
           </tr>
         </table>
       </li>
       <li class="hang">
         <table cellspacing="0" cellpadding="0" class="biao" >
           <tr>
             <td class="xuliehao"  rowspan="2" > 5 </td>
             <td class="touxiang"  rowspan="2">
              <img class="touxiang1" src="../assets/biaoqing.jpg" alt="头像" />
             </td>
             <td  class="name">罗五可</td>
             <td class="tianshu">已经连续戒撸<em>32</em>天</td>
           </tr>
           <tr>
             <td class="diqu"> &#40;来自湖南长沙 &nbsp; 二戒&#41;  </td>
             <td class="jine">领取红包总额<em>122.11</em>元</td>
           </tr>
         </table>
       </li>
       <li class="hang">
         <table cellspacing="0" cellpadding="0" class="biao" >
           <tr>
             <td class="xuliehao"  rowspan="2" > 6 </td>
             <td class="touxiang"  rowspan="2">
              <img class="touxiang1" src="../assets/biaoqing.jpg" alt="头像" />
             </td>
             <td  class="name">罗六可</td>
             <td class="tianshu">已经连续戒撸<em>32</em>天</td>
           </tr>
           <tr>
             <td class="diqu"> &#40;来自湖南长沙 &nbsp; 二戒&#41;  </td>
             <td class="jine">领取红包总额<em>122.11</em>元</td>
           </tr>
         </table>
       </li>
     </ul>
   </div>
   <div class="linghongbao">
      <a href="#">签到领红包</a>
   </div>
</div>
</template>
<style>
#rank { background-image: url(../assets/bgimg2.png);
        background-repeat: repeat;
        width: 100%;
        height: 100%;
        font-size: 12px;}

.content{
  width: 100%;
  position: relative;
  top: 45px;}

#liebiao { width: 100%;
           margin: 0;
           list-style: none;}

.hang { background-color: rgba(255,255,255,0.6);
        height: 15%;
        margin-bottom: 1%;}

.xuliehao { text-align: center;
            padding-left: 2%;}

.touxiang { width: 20%;
            margin: 0;
            padding: 0;}

.touxiang1 { width: 75%;
            height: 10%;
            border-radius: 90%;
            padding-left: 18%;
            margin-top: 0;}

.name { font-size: 1.1rem;
        text-align: left;
        padding-left: 2%;
        margin: 0;}

.diqu { text-align: left;
        padding-left: 2%;}

.tianshu { text-align: right;}

.jine { text-align: right;}

em {color: #FFA500;
    font-size: 1rem;
    font-weight: bold;}

.linghongbao { background-color: red;
               border-radius: 0.5rem;
               width: 40%;
               height: 6%;
               position: relative;
               top: 16%;
               margin: 0 auto;
               text-align: center;
               font-size: 1.1rem;
               line-height: 2.4rem;
               font-weight: bolder;}

a:link  { color: white;
          text-decoration: none;}

a:visited{ color: white;
           text-decoration: none;}

</style>
<script>
    export default{
    }
</script>
