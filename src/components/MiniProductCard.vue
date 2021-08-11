<template>
  <v-card
      class="pa-1 d-flex flex-row flex-wrap ma-2"
      @click="getProduct"
  >
    <v-row class="align-center">
      <v-col xs="12" sm="3" cols="12" lg="3" xl="3">
        <v-img
            :src="!!product.image ? product.image : `https://picsum.photos/500/500?image=${2 * 5 + 10}`"
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
            {{ product.title }}
          </v-col>
          <v-col cols="12">
            <v-icon>mdi-wifi-check</v-icon>
          </v-col>
          <v-col cols="12">
            <p>
              {{ product.city[0].toUpperCase() }}{{ product.city.slice(1) }}
              •
              {{ product.price }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MiniProductCard",
  props: ['product'],
  data() {
    return {
    }
  },
  methods: {
    async getProduct() {
      await this.$store.dispatch('getProduct',
          {
            category: this.product.category,
            sub: this.product.subcategory,
            productSlug: this.product.slug
          })
      await this.$router.push(`/product/${this.product.category}/${this.product.subcategory}/${this.product.slug}`)
    }
  }
}
</script>

<style scoped>

</style>
