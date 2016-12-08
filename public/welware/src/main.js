import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'
import Foo from './components/Foo'

/* eslint-disable no-new */
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/foo',
      component: Foo
    }
  ]
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

