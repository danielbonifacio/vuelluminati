'use strict'

let TestModule = {
	namespaced: true,
	state: {
		my_state: 'some string value'
	},
	getters: {
		myState: state => state.my_state
	},
	mutations: {
		myState: (state, payload) => state.myState = payload
	},
	actions: {
		setMyState: ({commit}, payload) => {
			commit('myState', payload)
		}
	}
}

export default TestModule
