import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'


Vue.use(VueRouter)

// register our routes here 
const router = new VueRouter(
{
    routes,
    mode: 'history' // default mode is hash # in the url
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
