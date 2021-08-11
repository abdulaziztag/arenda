<template>
  <v-card
      max-width="800"
      class="transparent mx-auto pa-3 elevation-0"
  >
    <v-row class="flex-wrap">
      <v-col cols="11">
        <v-text-field
            solo
            append-icon="mdi-filter-variant"
            label="Search"
            clearable
            dense
            @click:append="dialog = true"
            hint="Click to icon to filtering posts"
            color="amber darken-1"
            v-model="search"
            dark
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn @click="searchProducts" fab dark small>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <FilterDialog
        :dialog="dialog"
        @closeDialog="dialog = false"
        @applyFilter="applyFilter"
    />
    <v-card-title style="color: white">
      Interesting posts
    </v-card-title>
    <ListOfProducts :list="searchList" />
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
      dialog: false,
      search: ''
    }
  },
  computed: {
    searchList() {
      return this.$store.getters.getSearchList
    }
  },
  methods: {
    applyFilter() {
      this.dialog = false
    },
    async searchProducts() {
      await this.$store.dispatch('productSearch', this.search)
    }
  }
}
</script>

<style scoped>

</style>
