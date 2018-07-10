'use strict'

import Router from './router.conf'
import Config from '%/config'

Router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}${Config.app.title.separator}${Config.app.title.string}`
  next()
})

export default Router