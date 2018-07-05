'use strict'

import Config from '@/core/config/login'
import Externals from '@/core/router/externals'
import Http from '@/core/http'

const Login = new Object()

Login.TokenLogin = function () {
	return new Promise( function (resolve, reject) {
		Http[Config.method](Externals.API.Login)
		.then( res => {
			return res.staus == 200 ? resolve(true) : reject('O Status recebido pelo servidor não foi o esperado.')
		})
		.catch( err => {
			return reject(err)
		})
	})
}

export default Login