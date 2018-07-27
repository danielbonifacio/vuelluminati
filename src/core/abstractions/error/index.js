'use strict'

/**
 * Classe de erros
 * Responsável por checar e retornar formatações de erros
 */

const Error = new Object()

Error.normalizeFromRequest = (error) => {
	if (!error.response) {
		return "O servidor não respondeu à solicitação"
	}
	return error.response.message || error.response.mensagem
}

export default Error
