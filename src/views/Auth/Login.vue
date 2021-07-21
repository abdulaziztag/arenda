<template>
  <div class="login-main" v-if="flag === 0">
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
          <div class="input-name-right" @click="flag++">
            <a>Forgot password?</a>
          </div>
        </div>
        <button
            class="login-button"
            @click="login"
        >LOGIN</button>
      </div>
      <div class="login-bottom-section">
        <a @click="$router.push('/register')" class="sign-up-link">SIGN UP</a>
      </div>
    </div>
  </div>
  <ForgotPassword
      v-else-if="flag === 1"
      @goBack="flag--"
      @checkPhoneNumber="checkPhoneNumber"
  />
  <Verify
    v-else
    component-for="changePassword"
    @resetPassword="resetPassword"
  />
</template>
<script>
import Verify from '../../components/Verify';
import ForgotPassword from '../../components/ForgotPassword';

export default {
  components: {
    Verify,
    ForgotPassword
  },
  data () {
    return {
      password: '',
      phoneNumber: '',
      flag: 0
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('loginUser', {
        phone_number: this.phoneNumber,
        password: this.password
      })
    },
    async checkPhoneNumber (phoneNumber) {
      await this.$store.dispatch('checkPhoneNumberForResetPassword', {
        phone_number: phoneNumber,
      })
      this.flag++
    },
    async resetPassword (code) {
      await this.$store.dispatch('codeForPassword', {
        phone_number: this.phoneNumber,
        code
      })
      this.flag = 0
    }
  }
}
</script>
<style lang="less">

</style>
