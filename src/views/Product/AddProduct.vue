<template>
  <v-card class="mx-auto elevation-0 pa-7"
          max-width="800"
  >
    <v-row>
      <v-col cols="12" sm="6">
        <v-select
            v-model="chosenCategory"
            label="Choose category"
            :items="categories"
            item-text="name"
            solo
            item-value="slug"
            color="indigo"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
            v-if="subCategories.length > 0"
            v-model="chosenSubCategory"
            label="Choose sub-category"
            :items="subCategories"
            item-text="name"
            solo
            item-value="slug"
            color="indigo"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <RealState
            v-if="chosenCategory === 'real_estate' && chosenSubCategory !== null"
            :subCategory="chosenSubCategory"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import RealState from '../../components/CategoriesForAdd/RealState';

export default {
  name: "AddProduct",
  components: {
    RealState
  },
  data() {
    return {
      chosenCategory: null,
      chosenSubCategory: null
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories
    },
    subCategories() {
      return this.$store.getters.getSubCategory
    }
  },
  watch: {
    async chosenCategory() {
      this.chosenSubCategory = null
      await this.$store.dispatch('getSubCategory', this.chosenCategory)
    },
    chosenSubCategory() {
      console.log(this.chosenCategory, this.chosenSubCategory)
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
