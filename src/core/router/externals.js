'use strict'

import Config from '../config'

const Externals = {
	API: {
		Login: Config.envs[Config.env].api + 'auth'
	}
}

export default Externals