<template>
  <div
  >
    <v-toolbar
        dark
        height="60px"
        :color="this.color"
    >
      <v-row>
        <v-col class="text-h4 text-center font-weight-light">
          Arend<span style="color: #D500F9">Uy</span>
        </v-col>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: ['color'],
}
</script>

<style scoped>

</style>
