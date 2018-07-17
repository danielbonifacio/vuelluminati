'use strict'

import App from '%/config/app.json'
import Cookie from '%/abstractions/cookie'

let Token = new Object

Token.get = (key) => {
	let token = key ? key : App.token.key

	if (App.token.mode.toLowerCase() == 'cookie') {
		return Cookie.get(token)
	}
}

Token.check = (key) => {
	let token = key ? key : App.token.key

	if (App.token.mode.toLowerCase() == 'cookie') {
		return Cookie.check(token)
	}
}

export default Token
