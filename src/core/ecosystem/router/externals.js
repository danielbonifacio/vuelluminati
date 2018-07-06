'use strict'

import Config from '@/core/config'

// Retorna a rota com a base
const envHelper = (route, base) => Config.envs[Config.env][base] + '/' + route

// Helper para mapear a base de api
const api = route => envHelper(route, 'api')

const Externals = {
	API: {
		Auth: api('auth'),
		Login: api('login')
	}
}

export default Externals