import Vue from 'vue'
import Vuex from 'vuex'
//import global custom axios instance
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
   idToken: null,
   userId: null,

  },

  mutations: {
     authUser(state, userData) {
       state.idToken =userData.token
       state.userId = userData.userId
     }
  },

  actions: {

    signUp({commit}, authData) {
      axios.post(':signUp?key=AIzaSyB3PHowC9T7ULxumyRwxv9S-iGljDZaZIk',
      {
        password: authData.password,
        email: authData.email,
        returnSecureToken: true
      })
     .then(response => { 
       console.log(response) 
       commit('authUser', {
         token: response.data.idToken,
         userId: response.data.localId
       })
    
    })
     .catch(eror => console.log(error))
    },

    logIn({commit}, authData) {
      axios.post(':signInWithPassword?key=AIzaSyB3PHowC9T7ULxumyRwxv9S-iGljDZaZIk',
      {
        password: authData.password,
        email: authData.email,
        returnSecureToken: true
      })
      .then(response => { 
        console.log(response) 
        commit('authUser', {
          token: response.data.idToken,
          userId: response.data.localId
        })
     
     })
     .catch(eror => console.log(error))
    }

  },
  getters: {

  }
})