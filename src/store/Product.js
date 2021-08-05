export default {
  state: {
    productInfo: {
      product: {
        slug: "2_xonali",
        author: "Akbarbek Umurzakov",
        phone_number: "+998991231212",
        image: "/media/Screenshot_from_2021-07-11_21-34-38_JN99D9o.png",
        title: "2 xonali",
        description: "zor uy",
        price: 143,
        views: 0,
        address: "Sergeli",
        publish: "2021-07-25",
        created: "2021-07-25",
        updated: "2021-07-25",
        city: "toshkent",
        category: 'uylar',
        subCategory: 'dacha'
      },
      total_area: 45,
      rooms: 2
    }
  },
  mutations: {
    setProduct(state, payload) {
      state.product = payload
    }
  },
  actions: {
    async getProduct({ commit }, { category, sub, productSlug }) {
      console.log('sd')
      console.log(category, sub, productSlug)
      try {
        let data = await fetch(`/v1/product/detail/${category}/${sub}/${productSlug}/`, {
          method: 'GET',
        })
        console.log(data)
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  getters: {
    getProduct(state) {
      return state.productInfo
    }
  }
}
