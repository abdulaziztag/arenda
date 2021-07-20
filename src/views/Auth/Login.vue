<template>
  <div class="login-main">
    <div class="login-card">
      <div class="login-top-section">
        <h1 class="login-header">LogIn</h1>
        <div class="input-block">
          <div class="input-name">
            Phone Number
          </div>
          <div class="input-icon-group">
            <input
                type="text"
                placeholder="Type your phone number"
                v-model="phoneNumber"
            >
            <div class="input-icon">
              <b-icon icon="phone"></b-icon>
            </div>
          </div>

          <div class="input-name">
            Password
          </div>
          <div class="input-icon-group last">
            <input
                type="password"
                placeholder="Type your password"
                v-model="password"
            >
            <div class="input-icon">
              <b-icon icon="lock"></b-icon>
            </div>
          </div>
          <div class="input-name-right">
            <a href="">Forgot password?</a>
          </div>
        </div>
        <button
            class="login-button"
            @click="login"
        >LOGIN</button>
      </div>
      <div class="login-bottom-section">
        <a href="" @click="$router.push('/register')" class="sign-up-link">SIGN UP</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      password: '',
      phoneNumber: ''
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('loginUser', {
        phone_number: this.phoneNumber,
        password: this.password
      })
    }
  }
}
</script>
<style lang="less">

</style>
