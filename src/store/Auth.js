export default {
  state: {
    lol: 'fdsfds'
  },
  mutations: {
  },
  actions: {
    async loginUser(ctx, loginData) {
      console.log(loginData)
      try {
        let data = await fetch('http://{address}/accounts/login/', {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(data)
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  modules: {
  }
}
