'use strict'

import Http from '%/ecosystem/http'

const Login = new Object()

Login.TokenValidate = function (url) {
	return new Promise( function (resolve, reject) {
		Http
			.get(url)
			.then(res => res.staus == 200 ? resolve(true) : reject('O Status recebido pelo servidor não foi o esperado.'))
			.catch(err => reject(err))
	})
}

Login.PostLogin = function (url, user, password, _additions = false) {
	return new Promise( function (resolve, reject) {
		if(typeof url === 'undefined')
			return reject('Parâmetro \'url\' esperado não foi passado')
		if(typeof user === 'undefined')
			return reject('Parâmetro \'user\' esperado não foi passado')
		if(typeof password === 'undefined')
			return reject('Parâmetro \'password\' esperado não foi passado')

		let login = { user, password }
		login.additions = _additions

		if(!_additions)
			delete login.additions

		Http
			.post(url, login)
			.then(res => res.staus == 200
						? resolve(true)
						: reject('O Status recebido pelo servidor não foi o esperado.'))
			.catch(err => reject(err))
	})
}

export default Login
