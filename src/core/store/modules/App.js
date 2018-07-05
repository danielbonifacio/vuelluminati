import Login from '@/core/login'
import Config from '@/core/config'

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
		Login: ({ commit }) =>	{
			let url = Config.envs[Config.env].api
			Login.TokenLogin()
			.then( res => {
				return  res ? commit('logged', true) : false
			})
			.catch( err => {
				window.alert(err)
			})
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
			payload.message = payload.message 	!= undefined 	? payload.message 	: 'Sucesso ao realizar ação'

			context.commit('error', payload)
		}
	}
}

export default App