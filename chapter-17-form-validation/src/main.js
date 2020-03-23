import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

// some exemples of default settings of axios
axios.defaults.baseURL = "https://vue-js-axios-authen.firebaseio.com"
// axios.defaults.headers.common['Authorization'] = 'Marwa'
axios.defaults.headers.get['Accepts'] = 'application/json'

// intercepting requests
const reqInterceptor = axios.interceptors.request.use(config => {
  // return config otherwise it will block the request
  console.log("config ", config)
  return config
})

// intercepting responses
const resInterceptor = axios.interceptors.response.use(res => {
  // return config otherwise it will block the request
  console.log("response ", res)
  return res
})

// remove interceptors, should get the id of interceptor
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.request.eject(resInterceptor)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
