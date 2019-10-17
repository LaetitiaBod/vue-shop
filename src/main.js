import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vuerouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Bag from './components/Bag'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuerouter)

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: false } },
  { path: '/Home', component: Home, meta: { requiresAuth: false } },
  { path: '/Login', component: Login, meta: { requiresAuth: false } },
  { path: '/Bag', component: Bag, meta: { requiresAuth: true } }
]

const router = new Vuerouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
