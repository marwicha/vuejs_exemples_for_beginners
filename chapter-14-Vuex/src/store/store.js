import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'
// * to create an object which can be accesed with actions
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({

//  these objects must have unique names for their methods, a solution
//  creating a types file

    state: {
    },

    getters: {

    },

    // must be synchrous, change the state immediatly 
    mutations: {
       
    },

    // Async code
    actions,

    modules: {
      counter
    }
})