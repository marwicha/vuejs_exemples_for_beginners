export const increment = ({commit}, payload) => {
    commit('increment', payload)
},

export const decrement = ({commit}, payload) => {
    commit('decrement', payload)
},

export const asyncIncrement = ({commit}) => {
   setTimeout( () => {
       commit('increment')
   }, 1000)
},

export const asyncDecrement =  ({commit}) => {
    setTimeout( () => {
        commit('decrement')
    }, 1000)
 }