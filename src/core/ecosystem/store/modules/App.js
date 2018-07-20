import Error from "%/abstractions/error"
import Http from '%/ecosystem/http'
import Config from '%/config'
const Api = Config.envs[Config.env].api

const App = {
	namespaced: true,
	state: {
		loading: false,
		logged: false,
		success: {
			status: false,
			message: 'Sucesso',
			route: null
		},
		error: {
			status: false,
			message: 'Erro',
			route: null
		}
	},
	mutations: {
		loading: 	(state, payload) 	=> state.loading 	= payload,
		logged: 	(state, payload) 	=> state.logged 	= payload,
		success: 	(state, payload) 	=> state.success 	= payload,
		error: 		(state, payload) 	=> state.error		= payload
	},
	getters: {
		Loading: 	state => state.loading,
		Logged: 	state => state.logged,
		Success: 	state => state.success,
		Error: 		state => state.error,
	},
	actions: {
		Loading: 	(context, payload) 	=>	context.commit('loading', payload),
		ValidateToken: ({ commit }) =>	{
			let url = `${Api}/auth`
			Http
				.get(url)
				.then(res => res.status == 200 && commit('logged', true))
				.catch(err => window.alert(err))
		},
		Login: ({ commit, dispatch }, payload) =>	{
			let url = `${Api}/login`
			Http
				.get(url)
				.then(res => res.status == 200 && commit('logged', true))
				.catch(err => dispatch('Error', Error.normalizeFromRequest(err)))
		},
		// Object based payloads
		Success: (context, payload) =>	{
			payload.route 	= payload.route		!= undefined 	? payload.route 	: null
			payload.status 	= payload.status 	!= undefined	? payload.status 		: true
			payload.message = payload.message != undefined	? payload.message 	: 'Sucesso ao realizar ação'

			context.commit('success', payload)
		},
		Error: (context, payload) =>	{
			let new_payload = null
			if (typeof payload == 'object') {
				payload.route		= payload.route 		!= undefined	? payload.route 	: null
				payload.status 	= payload.status 		!= undefined	? payload.status 		: true
				payload.message = payload.message 	!= undefined 	? payload.message 	: 'Erro ao realizar ação'

				new_payload = payload
			}

			console.log

			if (typeof payload == 'string') {
				new_payload = {
					message: payload,
					status: true,
					route: null
				}
			}

			if (typeof payload == 'boolean') {
				new_payload = {
					message: 'Erro',
					status: payload,
					route: null
				}
			}

			context.commit('error', new_payload)
		}
	}
}

export default App
