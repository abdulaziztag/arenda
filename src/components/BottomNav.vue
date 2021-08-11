<template>
  <v-bottom-navigation
      fixed
      grow
      :background-color="color"
      dark
      shift
  >
    <v-btn
        v-for="item in items"
        :key="item.name"
        :to="item.to"
    >
      <span>{{ item.name }}</span>

      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: [
        {
          name: 'Categories',
          icon: 'mdi-shape-outline',
          to: '/categories',
        },
        {
          name: 'Search',
          icon: 'mdi-magnify',
          to: '/search',
        },
        {
          name: 'My posts',
          icon: 'mdi-arrow-up-bold-box-outline',
          to: '/my-posts',
        },
        {
          name: 'Profile',
          icon: 'mdi-account-circle-outline',
          to: '/profile',
        }
      ]
    }
  },
  computed: {
    color() {
      let path = this.$route.path
      if (path === '/categories') {
        return 'blue lighten-3'
      } else if (path === '/search') {
        return 'blue lighten-3'
      } else if (path === '/my-posts') {
        return 'blue lighten-3'
      } else {
        return 'blue lighten-3'
      }
    }
  },
  methods: {
  },
  created() {
    this.$emit('getColor', this.color)
  },
  watch: {
    color() {
      this.$emit('getColor', this.color)
    }
  }
}
</script>

<style scoped>

</style>
