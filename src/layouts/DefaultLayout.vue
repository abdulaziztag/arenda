<template>
  <v-app
      dark
      class="back"
  >
    <Toolbar :color="color" />
    <div
        style="background-image: url('https://pcvector.net/uploads/posts/2020-05/1589649485_triangle-min.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
      "
    >
      <router-view class="mt-5" style="margin-bottom: 100px;"/>
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
