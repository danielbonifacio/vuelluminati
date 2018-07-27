'use strict'

const enviroment = require('./abstractions/enviroment')

const show = new Object

show.env = () => enviroment.show()
show.envs = () => enviroment.show('all')

module.exports = show
