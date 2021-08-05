import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './Auth';
import Product from './Product';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    subCategories: [],
    hostName: '',
    subCategoryHeader: {}
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload
    },
    setHostName(state) {
      state.hostName = Vue.prototype.$hostName
    },
    setSubCategories(state, payload) {
      state.subCategories = payload
    },
    setSubCategoryHeader(state, payload) {
      state.subCategoryHeader = payload
    }
  },
  actions: {
    loginUser() {},
    signUp() {},
    checkVerificationCode() {},
    checkPhoneNumberForResetPassword () {},
    getProduct() {},
    async getCategories({commit}) {
      try {
        let data = await fetch(`${this.getters.getHostName}/v1/category/`, {
          method: "GET"
        })
        let categories = await data.json()
        commit('setCategories', categories)
      } catch (e) {
        throw new Error(e)
      }
    },
    async getSubCategory ({ commit }, payload) {
      try {
        let data = await fetch(`${this.getters.getHostName}/v1/category/${payload}`, {
          method: "GET"
        })
        let subCategories = await data.json()
        console.log(subCategories)
        commit('setSubCategories', subCategories)
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  getters: {
    getCategories(state) {
      /*let categories = state.categories
      let smth = categories.map(e => {
        return {...e, flex: '6'}
      })
      if (categories.length % 2 !== 0) {
        categories[0].flex = '12'
      }*/
      return state.categories
    },
    getHostName(state) {
      return state.hostName
    },
    getSubCategory(state) {
      return state.subCategories
    },
    getSubCategoryHeader(state) {
      return state.subCategoryHeader
    }
  },
  modules: {
    auth: Auth,
    product: Product
  }
})
