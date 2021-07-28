<template>
  <div class="verify-main">
    <div class="login-card verify-card">
      <div class="login-top-section">
        <h1 class="login-header">Verification</h1>
        <div class="input-block">
          <v-text-field
              filled
              clearable
              prepend-inner-icon="mdi-message-text"
              type="text"
              label="Type your verification code"
              v-model="verificationCode"
          />
        </div>
        <button
            class="login-button verify-button"
            @click="checkVerificationCode"
        >
          Verify
        </button>
      </div>
      <div class="login-bottom-section ">
        <a href="" class="sign-up-link verify-link">Did not receive a message?</a>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: ['componentFor'],
  data() {
    return {
      verificationCode: ''
    }
  },
  methods: {
    checkVerificationCode() {
      this.componentFor === 'reg' && this.$emit('checkVerificationCode', this.verificationCode)
      this.componentFor === 'changePassword' && this.$emit('resetPassword', this.verificationCode)
    }
  }
}
</script>
<style lang="less">

</style>
