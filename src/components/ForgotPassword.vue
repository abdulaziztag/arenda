<template>
  <div class="verify-main">
    <div class="login-card verify-card">
      <div class="login-top-section">
        <h1 class="login-header">Change the password</h1>
        <div class="input-block">
          <div class="input-name">
            Phone number
          </div>
          <div class="input-icon-group verify-margin">
            <input
                type="text"
                placeholder="Type your phone number"
                v-model="phoneNumber"
            >
            <div class="input-icon">
              <b-icon icon="type"></b-icon>
            </div>
          </div>


        </div>
        <button
            class="login-button verify-button"
            @click="checkPhoneNumber"
        >Get code</button>
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
