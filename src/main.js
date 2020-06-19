import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import '@/custom-css/space-helpers.css'
import '@/custom-css/border-helpers.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
