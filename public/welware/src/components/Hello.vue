<template>
  <div class="hello">
      <div id="rule">
        <router-link to='/swear'>活动规则</router-link>
      </div>
      <div id="contact">
        <a href="#" target="_blank">支持我们</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted: function () {
    var token = document.querySelector('meta[name="csrf-token"]').content
    var data = {
      utf8: '✓',
      authenticity_token: token,
      visit_history: {
        pageInfo: 'hello',
        openId: 'test',
        stayTime: 'fiiii'
      }
    }
    this.$http.post('/visit_histories.json', data).then((response) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  },
  beforeDestory: function () {
    console.log('Hello beforeDestory')
  },
  destoryed: function () {
    console.log('Hello destoryed')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {background-image: url('../assets/bgimg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        width: 100%;
        height: 100%;
        font-size: 19px;
        font-weight: bolder;}


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
