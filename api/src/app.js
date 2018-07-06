'use strict'

// Importando todos os pacotes e arquivos necessários

const express	 = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', (req, res) => res.send({message: 'Tá rodando'}))

module.exports = app
