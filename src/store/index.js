import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './Auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload
    }
  },
  actions: {
    loginUser() {},
    signUp() {},
    checkVerificationCode() {},
    checkPhoneNumberForResetPassword () {},
    async getCategories({commit}) {
      try {
        let data = await fetch('{{host}}/v1/category/', {
          method: "GET"
        })
        console.log(data)
        commit('setCategories', data)
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  getters: {
    getCategories(state) {
      return state.categories
    }
  },
  modules: {
    a: Auth
  }
})
