import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import menu from './modules/menu'
import orders from './modules/orders'

// Initialize
Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'


// Build the store
export default new Vuex.Store({
  state: {},

  mutations: {},

  getters: {},

  actions: {
    newOrder({commit}, event) {
      commit('NEW_ORDER', event.target.dataset.type)
    },
    orderUp({commit}, id) {
      commit('CLEAR_ORDER', id);
    }
  },

  modules: {
    menu,
    orders
  },

  strict: debug

});
