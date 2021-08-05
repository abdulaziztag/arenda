<template>
  <v-card
      class="pa-1 d-flex flex-row flex-wrap ma-2"
  >
    <v-row class="align-center">
      <v-col xs="12" sm="3" cols="12" lg="3" xl="3">
        <v-img
            :src="`https://picsum.photos/500/500?image=${2 * 5 + 10}`"
            lazy-src="https://picsum.photos/id/11/100/60"
            class="ma-1"
            :aspect-ratio="4/4"
        >
        </v-img>
      </v-col>
      <v-col
          xs="12"
          sm="9"
          cols="12"
          lg="9"
          xl="9"
          class="pa-2"
      >
        <v-row
            class="flex-wrap flex-column pa-3"
        >
          <v-col cols="12" class="text-h5">
            Cobalt 3chi position
          </v-col>
          <v-col cols="12"><p>Toshkent • 40mln •</p></v-col>

          <v-col cols="12">
            <v-spacer></v-spacer>
            <v-btn
                plain
                color="success"
                outlined
                @click="getProduct"
            >
              More
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MiniProductCard",
  data() {
    return {
    }
  },
  computed: {
    product() {
      return this.$store.getters.getProduct
    }
  },
  methods: {
    async getProduct() {
      await this.$store.dispatch('getProduct',
          {
            category: this.product.product.category,
            sub: this.product.product.subCategory,
            productSlug: this.product.product.slug
          })
      await this.$router.push(`/product/${this.product.product.slug}`)
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
