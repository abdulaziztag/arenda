<template>
  <div>
    <MiniProductCard/>
    <MiniProductCard/>
    <MiniProductCard/>
    <MiniProductCard/>
  </div>
</template>

<script>
import MiniProductCard from './MiniProductCard';

export default {
  name: "ListOfProducts",
  components: {
    MiniProductCard
  }
}
</script>

<style scoped>

</style>
