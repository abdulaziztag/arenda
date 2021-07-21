import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './Auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    loginUser() {},
    signUp() {},
    checkVerificationCode() {},
    checkPhoneNumberForResetPassword () {}
  },
  modules: {
    a: Auth
  }
})
