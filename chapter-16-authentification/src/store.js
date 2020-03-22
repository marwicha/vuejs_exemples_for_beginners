import Vue from 'vue'
import Vuex from 'vuex'
//import global custom axios instance
import axios from './axios-auth'

import globalAxios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
   idToken: null,
   userId: null,
   user: null
  },

  mutations: {
     authUser(state, userData) {
       state.idToken =userData.token
       state.userId = userData.userId
     },

     storeUser(state, user) {
       state.user = user
     }
  },

  actions: {

    signUp({commit, dispatch}, authData) {
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
    
       // in the same time call dispatch this action to save to db 
       dispatch('storeUser', authData)
    })
     .catch(error => console.log(error))
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
     .catch(error => console.log(error))
    },

    // store user in the main database
    storeUser({commit, state}, userData) {
      if (!state.idToken) {
        return
   }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },

    fetchUser({commit, state}) {
      if (!state.idToken) {
        return
   }
   globalAxios.get('/users.json' + '?auth=' + state.idToken)
   .then(res => {
   console.log(res)
   const data = res.data
   const users = []

   for(let key in data) {
      const user = data[key]
      user.id = key
      users.push(user)
   }

   commit('storeUser', users[0])
   })
   .catch(err => console.log(err))
   
  }

  },

  getters: {
     user(state) {
       return state.user
     }
  }
})