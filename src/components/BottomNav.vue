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
        @click="setColor"
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
          name: 'Newest',
          icon: 'mdi-newspaper-variant-outline',
          to: '/newPosts',
        },
        {
          name: 'Top',
          icon: 'mdi-arrow-up-bold-box-outline',
          to: '/top',
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
        return 'blue-grey'
      } else if (path === '/newPosts') {
        return 'brown'
      } else if (path === '/top') {
        return 'indigo'
      } else {
        return 'teal'
      }
    }
  },
  methods: {
    setColor() {
      this.$emit('getColor', this.color)
    }
  },
  created() {
    this.$emit('getColor', this.color)
  }
}
</script>

<style scoped>

</style>
