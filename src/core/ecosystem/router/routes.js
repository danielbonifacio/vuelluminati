'use strict'

import Home from 'Views/Home'
import NotFound from 'Views/404'
import Testar from 'Views/Testar'

const Routes = [
  // Index
  {
    path: '/',
    redirect: {
      name: 'Home'
    }
  },
  // Home
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  // Teste
  {
  	path: '/testar',
  	name: 'Testar',
  	component: Testar,
  	meta: {
  		title: 'Testar'
  	}
  },
  // Não encontrado
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
]

export default Routes
