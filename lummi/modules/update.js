'use strict'

const enviroment = require('./abstractions/enviroment').update

const update = new Object

update.env = (args) => enviroment(args)

module.exports = update
