<template>
  <div class="signup-main">
    <div class="login-card sing-up-card" v-if="!getVerificationCode">
      <div class="login-top-section">
        <h1 class="login-header">Sign Up</h1>
        <div class="input-block">
            <v-text-field
                filled
                clearable
                prepend-inner-icon="mdi-account"
                type="text"
                label="Type your first name"
                v-model="firstName"
            />
          <v-text-field
              filled
              clearable
              prepend-inner-icon="mdi-account"
              type="text"
              label="Type your last name"
              v-model="lastName"
          />
          <v-text-field
              filled
              clearable
              prepend-inner-icon="mdi-phone"
              type="text"
              label="Type your phone number"
              v-model="phoneNumber"
          />
          <v-text-field
              filled
              clearable
              prepend-inner-icon="mdi-lock"
              type="password"
              label="Type your password"
              v-model="password"
          />
        </div>
        <button
            class="login-button sign-up-margin-button"
            @click="signUp"
        >SIGN UP
        </button>
      </div>
      <div class="login-bottom-section">
        <a @click="$router.push('/login')" class="sign-up-link">LOGIN</a>
      </div>
    </div>
    <Verify
        v-else
        @checkVerificationCode="checkVerificationCode"
        componentFor="reg"
    />
  </div>
</template>
<script>
import Verify from '@/components/Verify.vue'

export default {
  components: {
    Verify
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      getVerificationCode: false
    }
  },
  methods: {
    async signUp() {
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
