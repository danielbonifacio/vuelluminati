'use strict'

const app = require('./app')
const normalize = require('normalize-port')

const port = normalize(3001)


app.listen(port, () => {
	console.log('aplicação rodando na porta: ' + port)
})

