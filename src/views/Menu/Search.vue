<template>
  <v-card
      max-width="800"
      class="transparent mx-auto pa-3 elevation-0"
  >
    <v-text-field
        solo
        append-icon="mdi-filter-variant"
        label="Search"
        clearable
        @click:append="dialog = true"
        hint="Click to icon to filtering posts"
        color="amber darken-1"
    ></v-text-field>
    <FilterDialog
        :dialog="dialog"
        @closeDialog="dialog = false"
        @applyFilter="applyFilter"
    />
    <v-card-title style="color: white">
      Interesting posts
    </v-card-title>
    <ListOfProducts/>
  </v-card>
</template>

<script>
import ListOfProducts from '../../components/ListOfProducts';
import FilterDialog from '../../components/FilterDialog';

export default {
  name: "Search",
  components: {FilterDialog, ListOfProducts},
  data() {
    return {
      dialog: false
    }
  },
   methods: {
     applyFilter() {
      this.dialog = false
     }
   }
}
</script>

<style scoped>

</style>
