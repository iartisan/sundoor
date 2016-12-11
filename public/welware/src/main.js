import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './store'

import wx from 'weixin-js-sdk'

import App from './App'
import Hello from './components/Hello'
import Foo from './components/Foo'
import Swear from './components/Swear'
import Congratulation from './components/Congratulation'
import Rank from './components/Rank'

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

new Vue({
  store: store,
  wx: wx,
  router: router,
  render: h => h(App)
}).$mount('#app')
