<template>
  <v-card
      class="mx-auto transparent elevation-0 pa-3"
      max-width="800"
  >
    <v-card class="pa-2">
      <v-row class="flex-column">
        <v-col>
          <v-img
              style="border-radius: 10px"
              :aspect-ratio="4/4"
              :src="imageSrc"
              gradient="to top, rgba(0, 0, 0, 0.8) 0%, transparent 100px"
              lazy-src="https://picsum.photos/id/11/100/60"
              alt="Image not found"
          ></v-img>
        </v-col>
        <v-col class="display-2">
          {{ productDetails.product.title }}
        </v-col>
        <v-col class="display-1">
          {{ productDetails.product.description }}
        </v-col>
        <v-col class="headline">
          Price: {{ productDetails.product.price }} sum
        </v-col>
        <v-col class="headline">
          Address: {{ productDetails.product.address }}
        </v-col>
        <v-col class="headline">
          City: {{ productDetails.product.city[0].toUpperCase() }}{{ productDetails.product.city.slice(1) }}

        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "ProductMain",
  data() {
    return {
      imageSrc: ''
    }
  },
  computed: {
    productDetails() {
      return this.$store.getters.getProduct
    }
  },
  async created() {
    await this.$store.dispatch('getProduct', {
      category: this.$route.params.categorySlug,
      sub: this.$route.params.subSlug,
      productSlug: this.$route.params.productSlug
    })
    this.imageSrc = `${this.$hostName}${this.productDetails.product.image}`
    console.log(this.productDetails)
  }
}
</script>

<style scoped>

</style>
