'use strict'

const enviroment = require('./abstractions/enviroment')

const update = new Object

update.env = (args) => enviroment.update(args)

module.exports = update
