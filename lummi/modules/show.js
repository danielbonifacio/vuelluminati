'use strict'

const enviroment = require('./abstractions/enviroment')

const show = new Object

show.env = () => enviroment.show()

module.exports = show
