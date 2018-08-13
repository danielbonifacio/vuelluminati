'use strict'

const enviroment = require('./abstractions/enviroment').update

const update = new Object

update.env = (name, args) => enviroment(name, args)

module.exports = update
