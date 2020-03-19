import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'


Vue.use(VueRouter)

// register our routes here 
const router = new VueRouter(
{
    routes,
    mode: 'history',// default mode is hash # in the url,

    // scroll to specific part in view
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      if (to.hash) {
        return { selector: to.hash}
      }
       return { x: 0, y: 0}
    }
})

// before routing action accure
router.beforeEach((to, from, next) => {

  // to allow routing actions to continue
  //next(false) to abort, next("path"), next({})
  next() 

  
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
