import Login from '@/core/abstractions/login'
import Config from '@/core/config'
import Externals from '@/core/ecosystem/router/externals'

const App = {
	namespaced: true,	
	state: {
		loading: false,
		logged: false,
		success: {
			is: false,
			message: 'Sucesso',
			route: null
		},
		error: {
			is: false,
			message: 'Erro',
			route: null
		},
		hiw: false
	},
	mutations: {
		hiw: 		(state, payload)	=> state.hiw 		= payload,
		loading: 	(state, payload) 	=> state.loading 	= payload,
		logged: 	(state, payload) 	=> state.logged 	= payload,
		success: 	(state, payload) 	=> state.success 	= payload,
		error: 		(state, payload) 	=> state.error		= payload
	},
	getters: {
		HIW: 		state => state.hiw,
		Loading: 	state => state.loading,
		Logged: 	state => state.logged,
		Success: 	state => state.success,
		Error: 		state => state.error,
	},
	actions: {
		HIW: 		(context, payload) 	=>	context.commit('hiw', payload),
		Loading: 	(context, payload) 	=>	context.commit('loading', payload),
		// XHR based payloads
		ValidateToken: ({ commit }) =>	{
			// Recupera a url para qual será enviada a requisição
			let url = Externals.API.Auth

			// Envia a requição para a URL
			Login[Config.login.mode || 'get'](url)
			.then( res => res == 200 ? commit('logged', true) : false )
			.catch( err => window.alert(err) )
		},
		Login: ({ commit }) =>	{
			let url = Externals.API.Login
			Login[Config.login.mode](url)
			.then( res => res == 200 ? commit('logged', true) : false )
			.catch( err => window.alert(err) )
		},
		// Object based payloads
		Success: (context, payload) =>	{
			payload.route 	= payload.route		!= undefined 	? payload.route 	: null
			payload.is 		= payload.is 		!= undefined	? payload.is 		: true
			payload.message = payload.message 	!= undefined	? payload.message 	: 'Sucesso ao realizar ação'

			context.commit('success', payload)
		},
		Error: (context, payload) =>	{
			payload.route	= payload.route 	!= undefined	? payload.route 	: null
			payload.is 		= payload.is 		!= undefined	? payload.is 		: true
			payload.message = payload.message 	!= undefined 	? payload.message 	: 'Erro ao realizar ação'

			context.commit('error', payload)
		}
	}
}

export default App