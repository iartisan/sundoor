import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './store'

import Velocity from 'velocity-animate'
import wx from 'weixin-js-sdk'

import App from './App'
import Hello from './components/Hello'
import Foo from './components/Foo'
import Swear from './components/Swear'
import Congratulation from './components/Congratulation'
import Rank from './components/Rank'

require('animate.css')

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/swear',
      component: Swear
    },
    {
      path: '/congratulation',
      component: Congratulation
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})

//  todo wx.config

// wx and Velocity is just leave for copy

new Vue({
  store: store,
  Velocity: Velocity,
  wx: wx,
  router: router,
  render: h => h(App)
}).$mount('#app')
