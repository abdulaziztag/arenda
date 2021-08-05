<template>
  <v-card
      class="mx-auto transparent elevation-0"
      max-width="800"
  >
    <v-container fluid>
      <v-row dense v-if="subCategory.length > 0">
        <v-col
            cols="12"
        >
          <v-hover v-slot="{ hover }">
            <v-card
                ripple
                class="pa-1"
                style="color: white"
                :elevation="hover ? 12 : 2"
            >
              <v-img
                  :src="!!subCategoryHeader.src ? subCategoryHeader.src : 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'"
                  lazy-src="https://picsum.photos/id/11/100/60"
                  gradient="to top, rgba(0, 0, 0, 0.8) 0%, transparent 100px"
                  class="white--text align-end"
                  height="200px"
              >
                <v-card-title v-text="subCategoryHeader.name"></v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12">
          <v-list>
            <v-list-item @click="getProducts" v-for="sub in subCategory">
              {{sub.name}}
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <p>We dont have this kind of category </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "subCategories",
  methods: {
    getProducts() {
      console.log('ds')
    }
  },
  computed: {
    subCategoryHeader() {
      return this.$store.getters.getSubCategoryHeader
    },
    subCategory() {
      return this.$store.getters.getSubCategory
    }
  },
  async created() {
    await this.$store.dispatch('getSubCategory', this.$route.params.categorySlug)
  }
}
</script>

<style scoped>

</style>
