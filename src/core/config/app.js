'use strict'

import Config from '@/core/config'

const App = {
	title: {
		string: 'Vuelluminati',
		separator: ' - '
	},
	forbidden: {
		url: baseUrl('/login', 'app')
	},
	token: {
		key: 'token'
	}
}

const baseUrl = function (params, base = undefined) {
	base = base != undefined ? base : 'app'
	return Config.envs[Config.env][base] + params
}

export default App