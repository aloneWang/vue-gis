/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';

import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
import 'leaflet.chinatmsproviders'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  render: h => h(App)
}).$mount('#app')
