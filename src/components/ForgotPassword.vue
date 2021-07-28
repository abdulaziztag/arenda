<template>
  <div class="verify-main">
    <div class="login-card verify-card">
      <div class="login-top-section">
        <h1 class="login-header">Change the password</h1>
        <div class="input-block">
          <v-text-field
              filled
              clearable
              prepend-inner-icon="mdi-phone"
              type="text"
              label="Type your phone number"
              v-model="phoneNumber"
          />
        </div>
        <button
            class="login-button verify-button"
            @click="checkPhoneNumber"
        >Get code
        </button>
      </div>
      <div class="login-bottom-section">
        <a @click="$emit('goBack')" class="sign-up-link">Go back</a>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      phoneNumber: ''
    }
  },
  methods: {
    checkPhoneNumber() {
      this.$emit('checkPhoneNumber', this.phoneNumber)
    }
  }
}
</script>
<style lang="less">

</style>
