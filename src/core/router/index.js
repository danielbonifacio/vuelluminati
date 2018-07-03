'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Config from '@/core/config'

Vue.use(Router)

// Importando as views
import Home from 'Views/Home'
import NotFound from 'Views/404'

const RouterObject =  new Router({
  routes: [
    {
      path: '/', // o index envia para a página ideias abertas
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: '404'
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  mode: 'history'
})

RouterObject.beforeEach((to, from, next) => {
  document.title = to.meta.title + Config.app.title.separator + Config.app.title.string
  next()
})

export default RouterObject