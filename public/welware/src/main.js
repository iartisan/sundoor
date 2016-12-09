import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Hello from './components/Hello'
import Foo from './components/Foo'
import Swear from './components/Swear'

/* eslint-disable no-new */
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
    }
  ]
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

