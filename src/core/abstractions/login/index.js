'use strict'

import Config from '@/core/config/login'
import Externals from '@/core/ecosystem/router/externals'
import Http from '@/core/ecosystem/http'

const Login = new Object()

Login.TokenValidate = function () {
	return new Promise( function (resolve, reject) {
		Http[Config.method](Externals.API.Auth)
		.then( res => res.staus == 200
						? resolve(true)
						: reject('O Status recebido pelo servidor não foi o esperado.') )
		.catch( err => reject(err) )
	})
}

Login.PostLogin = function (user = undefined, password = undefined, _additions = false) {
	return new Promise( function (resolve, reject) {
		// Validando entrada das variáveis
		if(typeof user === 'undefined')
			return reject('Parâmetro \'user\' esperado não foi passado')
		if(typeof password === 'undefined')
			return reject('Parâmetro \'password\' esperado não foi passado')

		// Criando o objeto que será enviado para o servidor
		let login = new Object()
		
		// Definindo as propriedades
		login.user = user
		login.password = password
		login.additions = _additions

		if(!_additions)
			delete login.additions

		// Enviando a requisição para o servidor
		Http['post'](Externals.API.Login, login)
		.then( res => res.staus == 200
						? resolve(true)
						: reject('O Status recebido pelo servidor não foi o esperado.') )
		.catch( err => reject(err) )
	})
}

export default Login