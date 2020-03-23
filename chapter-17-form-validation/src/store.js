import Vue from 'vue'
import Vuex from 'vuex'
//import global custom axios instance
import axios from './axios-auth'

import globalAxios from 'axios'
import router from './router'

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
     },

     clearAuthData (state) {
       state.idToken = null
       state.userId = null
     }
  },

  actions: {

    setLogoutTimer({commit}, expirationTime) {
       setTimeout(() => {
         commit('clearAuthData')
       }, expirationTime * 1000)
    },

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
       const now = new Date()
       //convert into milliseconds
       const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
       localStorage.setItem('token', response.data.idToken)
       localStorage.setItem('userId', response.data.localId)
       localStorage.setItem('expiresIn', expirationDate)
    
       // in the same time call dispatch this action to save to db 
       dispatch('storeUser', authData)
       dispatch('setLogoutTimer', response.data.expiresIn)
    })
     .catch(error => console.log(error))
    },

    logIn({commit, dispatch}, authData) {
      axios.post(':signInWithPassword?key=AIzaSyB3PHowC9T7ULxumyRwxv9S-iGljDZaZIk',
      {
        password: authData.password,
        email: authData.email,
        returnSecureToken: true
      })
      .then(response => { 
        console.log(response) 
        const now = new Date()
        //convert into milliseconds
        const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('userId', response.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
     
        commit('authUser', {
          token: response.data.idToken,
          userId: response.data.localId
        })
        dispatch('setLogoutTimer', response.data.expiresIn)
     
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

  },

   logout({commit}) {
    commit('clearAuthData')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    router.replace('/signin')
   },

   tryAutoLogin({commit}) {
     const token = localStorage.getItem('token')
     if (!token) {
       return
     }
     const expirationDate = localStorage.getItem('expirationDate')
     const now = new Date()
     if (now >= expirationDate) {
       return
     }
     const userId = localStorage.getItem('userId')
     commit('authUser', {
       token: token,
       userId: userId
     })
   }

  },

  getters: {
     user(state) {
       return state.user
     },

     isAuthentificated(state) {
       return state.idToken !== null
     }
  }
})