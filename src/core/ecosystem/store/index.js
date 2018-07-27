import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Importando módulos do sistema
import App from './modules/App'
import Sys from './modules/System'

export default new Vuex.Store({
	modules: {
		App,
		Sys
	}
})
