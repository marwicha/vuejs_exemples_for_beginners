import * as types from '../types'

const state = {
    counter: 0
},

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2 
    },

    [types.CLICK_COUNTER]: state => {
        return state.counter + 'Clicks'
    }
},

const mutations = {
    increment: (state, payload ) => {
        state.counter += payload
    },

    decrement: (state, payload )  => {
        state.counter -=payload
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}