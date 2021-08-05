<template>
  <v-card
      class="mx-auto transparent elevation-0"
      max-width="800"
  >
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
