<template>
  <v-card
      class="mx-auto transparent elevation-0 pa-2"
      max-width="800"
  >
    <v-btn
        block
        dark
        depressed
        color="purple accent-3"
        to="/addPost"
    >
      Add post
    </v-btn>
    <ListOfProducts/>
  </v-card>
</template>

<script>
import ListOfProducts from '../../components/ListOfProducts';

export default {
  name: "NewPosts",
  components: {
    ListOfProducts
  }
}
</script>

<style scoped>

</style>
