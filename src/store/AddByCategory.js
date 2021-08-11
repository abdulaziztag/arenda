export default {
  state: {},
  mutations: {},
  actions: {
    async addToRealEstate({commit}, {product, fileImage}) {
      try {
        let data = await fetch(`${this.getters.getHostName}/v1/product/add/real_estate/`, {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4NTg0NjcwLCJqdGkiOiJiNDhjNGVmNmI1Njg0MzBhYjM5ZTJiZTQzNGZkZGViOSIsInVzZXJfaWQiOjF9.jJ17NnaAArM2YFTQaVIJfqEPfoR9tgFceEUNCt1Lwao'
          }
        })
        let slug = await data.json()
        console.log(fileImage, 'lol')
        let imageUploading = fetch(`${this.getters.getHostName}/v1/upload_image/${slug}`, {
          method: 'POST',
          body: fileImage,
          headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4NTg0NjcwLCJqdGkiOiJiNDhjNGVmNmI1Njg0MzBhYjM5ZTJiZTQzNGZkZGViOSIsInVzZXJfaWQiOjF9.jJ17NnaAArM2YFTQaVIJfqEPfoR9tgFceEUNCt1Lwao'
          }
        })
        await imageUploading.then(e=>{
          console.log(e.statusText)
        })
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  getters: {}
}
