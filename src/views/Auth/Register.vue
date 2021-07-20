<template>
  <div class="signup-main">
    <div class="login-card sing-up-card" v-if="!getVerificationCode">
      <div class="login-top-section">
        <h1 class="login-header">Sign Up</h1>
        <div class="input-block">
          <div class="input-name sign-up-name">
            First Name
          </div>
          <div class="input-icon-group sign-up-margin">
            <input
                type="text"
                placeholder="Type your first name"
                v-model="firstName"
            >
            <div class="input-icon">
              <b-icon icon="person"></b-icon>
            </div>
          </div>
          <div class="input-name sign-up-name">
            Last Name
          </div>
          <div class="input-icon-group sign-up-margin">
            <input
                type="text"
                placeholder="Type your last name"
                v-model="lastName"
            >
            <div class="input-icon">
              <b-icon icon="person-fill"></b-icon>
            </div>
          </div>
          <div class="input-name sign-up-name">
            Phone Number
          </div>
          <div class="input-icon-group sign-up-margin">
            <input
                type="text"
                placeholder="Type your phone number"
                v-model="phoneNumber"
            >
            <div class="input-icon">
              <b-icon icon="phone"></b-icon>
            </div>
          </div>
          <div class="input-name sign-up-name">
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

        </div>
        <button
            class="login-button sign-up-margin-button"
            @click="signUp"
        >SIGN UP</button>
      </div>
      <div class="login-bottom-section">
        <a href="" @click="$router.push('/login')" class="sign-up-link">LOGIN</a>
      </div>
    </div>
    <Verify
        v-else
        @checkVerificationCode="checkVerificationCode"
    />
  </div>
</template>
<script>
import Verify from '@/components/Verify.vue'

export default {
  components: {
    Verify
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      getVerificationCode: false
    }
  },
  methods: {
    async signUp () {
      await this.$store.dispatch('signUp', {
        first_name: this.firstName,
        last_name: this.lastName,
        phone_number: this.phoneNumber,
        password: this.password
      })
      this.getVerificationCode = !this.getVerificationCode
    },
    async checkVerificationCode(code) {
      await this.$store.dispatch('checkVerificationCode', {
        phone_number: this.phoneNumber,
        code
      })
    }
  }
}
</script>
<style lang="less">

</style>
