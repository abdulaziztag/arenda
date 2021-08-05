<template>
  <v-card
      class="mx-auto transparent elevation-0"
      max-width="800"
  >
    <v-card-title class="display-1 white--text">
      Categories
    </v-card-title>
    <v-container fluid>
      <v-row dense>
        <v-col
            v-for="category in categories"
            :key="category.name"
            :cols="category.flex"
        >
          <v-hover v-slot="{ hover }">
          <v-card
              ripple
              class="pa-1"
              style="color: white"
              :elevation="hover ? 12 : 2"
          >
            <v-img
                :src="!!category.src ? category.src : 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'"
                lazy-src="https://picsum.photos/id/11/100/60"
                @click="clicked(category)"
                gradient="to top, rgba(0, 0, 0, 0.8) 0%, transparent 100px"
                class="white--text align-end"
                height="200px"
            >
              <v-card-title v-text="category.name"></v-card-title>
            </v-img>
          </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      cols: 12
    }
  },
  methods: {
    async clicked (category) {
      await this.$store.dispatch('getSubCategory', category.slug)
      this.$store.commit('setSubCategoryHeader', {
        name: category.name,
        src: category.src
      })
      this.$router.push(`/category/${category.slug}`)
    }
  },
  computed: {
    categories() {
      let filteredCategories = this.$store.getters.getCategories
      filteredCategories = filteredCategories.map(e => {
        return {...e, flex: 6}
      })
      if (filteredCategories.length % 2 !== 0) {
        filteredCategories[0].flex = 12
      }
      return filteredCategories
    }
  },
  async created() {
    if (this.$store.getters.getCategories.length === 0) {
      await this.$store.dispatch('getCategories')
    }
  }
}
</script>

<style scoped>
</style>
