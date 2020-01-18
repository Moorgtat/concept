import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
