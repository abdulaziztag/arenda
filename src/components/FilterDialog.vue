<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
            dark
            color="amber darken-1"
        >
          <v-btn
              icon
              dark
              @click="$emit('closeDialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Filter</v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn
                dark
                text
                @click="applyFilter"
            >
              Apply filters
            </v-btn>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ['dialog'],
  data () {
    return {
    }
  },
  methods: {
    applyFilter() {
      this.$emit('applyFilter')
    }
  }
}
</script>

<style>

</style>
