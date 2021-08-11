<template>
  <div>
    <MiniProductCard
      v-for="product in list"
      :product="product"
      :key="product.slug"
    />
  </div>
</template>

<script>
import MiniProductCard from './MiniProductCard';

export default {
  name: "ListOfProducts",
  props: ['list'],
  components: {
    MiniProductCard
  }
}
</script>

<style scoped>

</style>
