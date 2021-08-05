import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Categories from '../views/Menu/Categories'
import MyPosts from '../views/Menu/MyPosts'
import ProductMain from '../views/Product/ProductMain';
import Search from '../views/Menu/Search';
import SubCategories from '../views/Menu/SubCategories';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/category/:categorySlug/',
    name: 'SubCategories',
    component: SubCategories
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/my-posts',
    name: 'ListOfProducts',
    component: MyPosts
  },
  {
    path: '/product/:product',
    name: 'ProductMain',
    component: ProductMain
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: 'auth-layout'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
