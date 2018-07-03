'use strict'

// Vue
import Vue from 'vue'
import App from './App'

// Cores
import router 	from '@/core/router'
import store 	from '@/core/store'
import http  	from '@/core/axios'
import Config 	from '@/core/config'
import Moment 	from '@/core/moment'
import Warner 	from '@/core/warner'
import Param  	from '@/core/param.js'
import Error  	from '@/core/error'

// Determina em qual ambiente a Aplicalção deverá ser iniciada.
let Enviroment = Config.env;

// Remove a dica de produção do vue do console
Vue.config.productionTip = false

// Console Warner
Warner();

// Permite acessar métodos importados dentro da aplicação
Vue.prototype.$moment = Moment
Vue.prototype.$config = Config

// Atalhos da aplicação
Vue.prototype.$appUrl = Config.envs[Enviroment].app
Vue.prototype.$apiUrl = Config.envs[Enviroment].api
Vue.prototype.$403Url = Config.app.forbidden.url
Vue.prototype.$error  = Error

// Recupera o Token de Autenticação no link e renova
// let token = Param('token') ? Param('token') : false
// if (token) {
// 	window.localStorage.setItem(Config.app.token.key, token)
// 	window.location.href = Vue.prototype.$appUrl
// }

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	http,
	components: {
		App
	},
	template: '<App/>'
})
