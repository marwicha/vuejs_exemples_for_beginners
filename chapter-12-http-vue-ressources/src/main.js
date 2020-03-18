import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// add plugin with use
Vue.use(VueResource)

// url http globaly
Vue.http.options.root = 'https://vue-js-project-course.firebaseio.com/'

// Intercepting requests
Vue.http.interceptors.push((request, next) => {

  if (request.method == 'POST' ) {
    request.method = 'PUT'
  }

  // Intercepting responses
  next(response => {
       response.json = () => {
         return  { messages: response.body}
       }
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
