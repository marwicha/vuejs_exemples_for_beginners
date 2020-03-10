import Vue from 'vue'
import App from './App.vue'

// should be created and excuted before vue js instance
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

