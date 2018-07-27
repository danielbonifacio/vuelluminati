'use strict'

import Vue from '@/vue.config'
import App from '@/App'
import router from '%/ecosystem/router'

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
