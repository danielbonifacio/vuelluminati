'use strict'

import Router from './router.conf'
import Config from '%/config'

Router.beforeEach((to, from, next) => {
	if (to.meta.title == 'Home') {
		document.title = Config.app.title.value + Config.app.title.separator + to.meta.title
	} else {
		document.title = `${to.meta.title}${Config.app.title.separator}${Config.app.title.value}`
	}
	next()
})

export default Router
