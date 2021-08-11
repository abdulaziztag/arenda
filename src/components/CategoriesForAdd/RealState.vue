<template>
  <div>
    <v-file-input
      truncate-length="50"
      show-size
      solo
      label="Choose the photo"
      v-model="fileImage"
      @change="setFormData"
    ></v-file-input>
    <v-text-field
        v-for="field in fields"
        v-model="field.model"
        :label="field.label"
        :key="field.label"
        solo
        :type="field.type"
    ></v-text-field>
    <v-col>
      <v-btn
          block
          dark
          depressed
          color="purple darken-1"
          @click="realEstateHandler"
      >
        Add post
      </v-btn>
    </v-col>
  </div>
</template>

<script>
export default {
  props: ['subCategory'],
  name: "RealState",
  data() {
    return {
      fileImage: [],
      fields: [
        {model: '', type: 'string', label: 'Title'},
        {model: '', type: 'string', label: 'Description'},
        {model: '', type: 'number', label: 'Price'},
        {model: '', type: 'string', label: 'Address'},
        {model: '', type: 'string', label: 'City'},
        {model: '', type: 'number', label: 'Total area'}
      ],
      image: null
    }
  },
  methods: {
    async realEstateHandler() {
      let product = {
        product: {
          title: this.fields[0].model,
          description: this.fields[1].model,
          price: this.fields[2].model,
          address: this.fields[3].model,
          city: this.fields[4].model,
          draft: false,
          subcategory: this.subCategory
        },
        total_area: this.fields[5].model
      }
      await this.$store.dispatch('addToRealEstate', {
        product,
        fileImage: this.image
      })
    },
    setFormData() {
      let file = new FormData()
      file.append('image', this.fileImage)
      this.image = file
    }
  }
}
</script>

<style scoped>

</style>
