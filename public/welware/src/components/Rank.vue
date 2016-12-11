<template>
    <div id="rank">
     <ol id="liebiao">
       <li class="hang">
          <table>
            <tr>
              <th class="touxiang"  rowspan="2">
               <img class="touxiang1" src="../assets/biaoqing.jpg" alt="头像" />
              </th>
              <th class="name">罗大可</th>
              <th class="tianshu">已经连续戒撸<em>32</em>天</th>
            </tr>
            <tr>
              <td class="diqu"> &#40;来自湖南长沙 &nbsp; 二戒&#41;  </td>
              <td class="jine">领取红包总额<em>122.11</em>元</td>
            </tr>
          </table>
       </li>
     </ol>
    </div>
</template>
<style>
#rank { background-image: url(../assets/bgimg2.png);
        background-repeat: repeat;
        width: 100%;
        height: 100%;
        font-size: 12px;}

#liebiao { width: 100%;
           height: 80%;
           margin: 0;
           padding: 0;}

.hang { background-color: rgba(255,255,255,0.6);
        width: 100%;
        height: 15%;
        position: relative;
        top: 13%;}

.touxiang { width: 25%;
            margin: 0;
            padding: 0;}

.touxiang1 { width: 90%;
            height: 13%;
            border-radius: 90%;
            padding-left: 6%;
            margin-top: 0;}

.name { font-size: 1.2rem;
        text-align: left;
        padding: 0;
        margin: 0;}

.diqu { text-align: left;}

.tianshu { text-align: right;}

.jine { text-align: right;}

em {color: #FFA500;
    font-size: 1rem;}

</style>
<script>
    export default{
    }
</script>
