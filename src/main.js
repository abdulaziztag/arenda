import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import vuetify from '@/plugins/vuetify'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';

Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)

import './assets/style.less'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.prototype.$hostName = 'https://arendauy1.herokuapp.com'

store.commit('setHostName')

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
