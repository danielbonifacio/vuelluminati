'use strict'

import Vue from 'vue'

// Config
import Config 	from '@/core/config'

// Ecossistema
import Store 	from '@/core/ecosystem/store'
import Http 	from '@/core/ecosystem/http'

// Abstrações
import Time 	from '@/core/abstractions/time'

let Enviroment = Config.env;

Vue.config.productionTip = false

Vue.prototype.$time 	= Time
Vue.prototype.$config 	= Config
Vue.prototype.$http		= Http
Vue.prototype.$store	= Store

Vue.prototype.$app = Config.envs[Enviroment].app
Vue.prototype.$api = Config.envs[Enviroment].api
Vue.prototype.$403 = Config.envs[Enviroment].app + '/403'

export default Vue
