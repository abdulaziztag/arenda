<template>
  <div
  >
    <v-toolbar
        dark
        height="60px"
        :color="this.color"
    >

      <v-toolbar-title>Arenduy</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items style="width: 200px">
        <v-text-field
            label="Search"
            solo
            :color="this.color"
            clearable
            light
            append-icon="mdi-magnify"
            class="pt-1"
        >
        </v-text-field>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: ['color'],
  created() {
    console.log(this.color)
  }
}
</script>

<style scoped>

</style>
