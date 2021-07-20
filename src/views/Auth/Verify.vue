<template>
  <div class="verify-main">
    <div class="login-card verify-card">
      <div class="login-top-section">
        <h1 class="login-header">Verification</h1>
        <div class="input-block">
          <div class="input-name">
            Verification Code
          </div>
          <div class="input-icon-group verify-margin">
            <input
                type="text"
                placeholder="Type your verification code"
                v-model="verificationCode"
            >
            <div class="input-icon">
              <b-icon icon="type"></b-icon>
            </div>
          </div>


        </div>
        <button
            class="login-button verify-button"
            @click="verify"
        >Verify</button>
      </div>
      <div class="login-bottom-section ">
        <a href="" class="sign-up-link verify-link">Did not reseive a message?</a>
      </div>
    </div>
  </div>

</template>
<script>
export default {

}
</script>
<style lang="less">

</style>