import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vuerouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuerouter)
Vue.use(VueSession)

const routes = [
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/Login', component: Login }
]

const router = new Vuerouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
