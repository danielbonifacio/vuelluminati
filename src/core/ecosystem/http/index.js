import Http from 'axios'
import Token from '%/abstractions/token'

let Headers = new Object
if (Token.check()) {
	Headers['Authorization'] = Token.get('token')
}
Headers['Content-Type'] = 'application/json' // Normalizando o tipo de envio de dados nas requisições

Object.keys(Headers).map(key => {
	console.log(key + ": " + Headers[key])
	Http.defaults.headers.common[key] = Headers[key]
})

export default Http;
