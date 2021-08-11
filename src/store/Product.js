export default {
  state: {
    productInfo: {},
    productList: [],
    searchList: []
  },
  mutations: {
    setProduct(state, payload) {
      state.productInfo = payload
    },
    setProductList(state, payload) {
      state.productList = payload
    },
    setSearchList(state, payload) {
      state.searchList = payload
    }
  },
  actions: {
    async getProduct({ commit }, { category, sub, productSlug }) {
      try {
        let data = await fetch(`${this.getters.getHostName}/v1/product/detail/${category}/${sub}/${productSlug}/`, {
          method: 'GET',
        })
        let productDetail = await data.json()
        commit('setProduct', productDetail)
      } catch (e) {
        throw new Error(e)
      }
    },
    async getProductListInCategories({ commit }, { categorySlug, subSlug, page }) {
      try {
        let data = await fetch(`${this.state.hostName}/v1/product/list/${categorySlug}/${subSlug}/?page=${!!page ? page : 1}`)
        let listOfProducts = await data.json()
        commit('setProductList', listOfProducts)
      } catch (e) {
        throw new Error(e)
      }
    },
    async productSearch({ commit }, payload) {
      try {
        let data = await fetch(`${this.getters.getHostName}/v1/product/search/?search=${payload}`)
        let list = await data.json()
        commit('setSearchList', list)
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  getters: {
    getProduct(state) {
      return state.productInfo
    },
    getProductListInCategories(state) {
      return state.productList
    },
    getSearchList(state) {
      return state.searchList
    }
  }
}
