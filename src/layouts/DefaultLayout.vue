<template>
  <v-app
      dark
      class="back"
      style="height: auto"
  >
    <Toolbar :color="color" />
    <div
        style="
        background: url('https://arendauy1.herokuapp.com/media/backgroundimage.png') fixed;
        background-size: cover;
        height: 100%;
      "
    >
      <router-view class="mt-5" style="margin-bottom: 100px"/>
    </div>
    <BottomNav @getColor="setColor" />
  </v-app>
</template>

<script>
import BottomNav from '../components/BottomNav';
import Toolbar from '../components/Toolbar';

export default {
  name: "DefaultLayout",
  data() {
    return {
      color: null
    }
  },
  methods: {
    setColor(color) {
      this.color = color
    }
  },
  components: {BottomNav, Toolbar}
}
</script>

<style scoped>
</style>
