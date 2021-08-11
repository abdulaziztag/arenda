<template>
  <v-card
    max-width="800"
    class="elevation-10 transparent elevation-0 mx-auto pa-3"
  >
    <ListOfProducts :list="productList.results" />
    <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="7"
    ></v-pagination>
  </v-card>
</template>

<script>
import ListOfProducts from '../../components/ListOfProducts';

export default {
  name: "ProductList",
  components: {
    ListOfProducts
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    productList() {
      return this.$store.getters.getProductListInCategories
    },
    pageCount() {
      let countInteger = Math.trunc(this.productList.count / 6)
      if  (this.productList.count % 6 === 0) {
        console.log(this.productList.count % 6 === 0)
        return countInteger
      } else {
        return ++countInteger
      }
    }
  },
  watch: {
    async page() {
      await this.$store.dispatch('getProductListInCategories', {
        categorySlug: this.$route.params.categorySlug,
        subSlug: this.$route.params.subCategorySlug,
        page: this.page
      })
    }
  },
  async created() {
    this.page = !!this.$route.query.page ? Number(this.$route.query.page) : 1
    await this.$store.dispatch('getProductListInCategories', {
      categorySlug: this.$route.params.categorySlug,
      subSlug: this.$route.params.subCategorySlug
    })
  }
}
</script>

<style scoped>

</style>
