'use strict'

const enviroment = require('./abstractions/enviroment')

const change = new Object

change.env = (args) => enviroment.change(args)

module.exports = change
