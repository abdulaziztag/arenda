export default {
  state: {
  },
  mutations: {
  },
  actions: {
    async loginUser({ commit }, payload) {
      console.log(this.getters.getHostName)
      console.log(payload)
      try {
        let data = await fetch(`${this.getters.getHostName}/accounts/login/`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(data)
      } catch (e) {
        throw new Error(e)
      }
    },
    async signUp ({ commit }, payload) {
      console.log(payload)
      try {
        let data = await fetch('{{address}}/accounts/signup/', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(data)
      } catch (e) {
        throw new Error(e)
      }
    },
    async checkVerificationCode (_, payload) {
      try {
        console.log(payload)
        let data = await fetch('{{address}}/accounts/verify-code/', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(data)
      } catch (e) {
        throw new Error(e)
      }
    },
    async checkPhoneNumberForResetPassword(_, payload) {
      try {
        console.log(payload)
        let data = await fetch('http://{address}/accounts/recover/', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(data)
      } catch (e) {
        throw new Error(e)
      }
    },
    async codeForPassword(_, payload) {
      try {
        console.log(payload)
        let data = await fetch('http://{address}/accounts/verify-code-password/', {
          method: 'POST',
          body: JSON.stringify(payload),
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
