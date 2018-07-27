'use strict'

import Vue from 'vue'
import App from '%/config/app.json'

const System = {
	namespaced: true,
	state: {
		version: App.version,
		vueVersion: Vue.version
	},
	getters: {
		Version: state => state.version,
		Vue: state => state.vueVersion
	}
}

export default System
