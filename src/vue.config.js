'use strict'

import Vue from 'vue'
import App from './App'

// Config
import Config 	from '@/core/config'

// Ecossistema
import Router 	from '@/core/ecosystem/router'
import Store 	from '@/core/ecosystem/store'
import Http 	from '@/core/ecosystem/http'

// Abstrações
import Date 	from '@/core/abstractions/moment'
import Error  	from '@/core/abstractions/error'

let Enviroment = Config.env;

Vue.config.productionTip = false

Vue.prototype.$date 	= Date
Vue.prototype.$error 	= Error
Vue.prototype.$config 	= Config
Vue.prototype.$http		= Http
Vue.prototype.$store	= Store

Vue.prototype.$app = Config.envs[Enviroment].app
Vue.prototype.$api = Config.envs[Enviroment].api
Vue.prototype.$403 = Config.app.forbidden.url

export default Vue