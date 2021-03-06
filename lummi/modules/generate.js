const fs = require('fs')
const { config, Envs, Env } = require('../config/dir')

const Generate = {}

Generate.envs = () => {
	if (fs.existsSync(Env) && fs.existsSync(Envs)) {
		return console.log('Você já tem ambientes cadastrados!')
	}

	let envs =
`{
	"dev": {
		"api": "http://localhost:3000",
		"app": "http://localhost:8080",
    "comment": "Ambiente de desenvolvimento local",
    "module": null
	},
	"prod": {
		"api": "https://api.com",
		"app": "https://app.com",
    "comment": "Ambiente de produção",
    "module": null
	}
}`

	let env = `"dev"`

	try {
		fs.writeFileSync(Envs, envs)
		fs.writeFileSync(Env, env)

		console.log('Ambientes gerados com sucesso!')
	} catch (err) {
		console.log('Erro!')
		console.log(err)
	}
}

module.exports = Generate
