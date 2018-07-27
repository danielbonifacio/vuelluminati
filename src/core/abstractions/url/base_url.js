'use strict'

import Config from '@/core/config'

const baseUrl = function (params, base = undefined) {
	base = base != undefined ? base : 'app'
	return Config.envs[Config.env][base] + params
}

export default baseUrl
