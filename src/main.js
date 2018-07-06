'use strict'

import Vue from '@/vue.config'
import App from '@/App'
import router from '@/core/ecosystem/router'

new Vue({
	router,
	el: '#app',
	components: { App },
	template: '<App/>'
})
