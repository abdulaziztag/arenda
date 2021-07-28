<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    this.$router.push('/categories')
  }
}
</script>

<style scoped>
.home {
}
</style>
