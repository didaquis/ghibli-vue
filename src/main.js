import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import 'bulma-timeline/dist/css/bulma-timeline.min.css' /* Bulma timeline extension */

Vue.use(Buefy)


/* https://www.npmjs.com/package/@fortawesome/vue-fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faHome, faGithub)

/* Custom CSS helpers */
import '@/custom-css/space-helpers.css'
import '@/custom-css/border-helpers.css'


Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
