'use strict'

import Envs from '%/config/envs'
import Env from '%/config/env'

const baseUrl = function (params, base = undefined) {
	if(!params){
		throw new SyntaxError("Nenhum parâmetro foi inserido")
	}
	base = base != undefined ? base : 'app'
	return Envs[Env][base] + params
}

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

export default App