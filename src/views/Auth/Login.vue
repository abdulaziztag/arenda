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
            <lable></lable>
            <input type="text" placeholder="Type your phone number">
            <div class="input-icon"><b-icon icon="phone"></b-icon></div>
          </div>

          <div class="input-name">
            Password
          </div>
          <div class="input-icon-group last">
            <input type="text" placeholder="Type your password">
            <div class="input-icon"><b-icon icon="lock"></b-icon></div>
          </div>
          <div class="input-name-right">
            <a href="">Forgot password?</a>
          </div>
        </div>
        <button class="login-button">LOGIN</button>
      </div>
      <div class="login-bottom-section">
        <a href="" class="sign-up-link">SIGN UP</a>
      </div>
    </div>
<!--    <b-btn to="/register">register</b-btn>-->
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">

</style>
