<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<style lang="less">

</style>
<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  },
  created() {

  }
}
</script>
