'use strict'

const enviroments = require('./abstractions/enviroment')

let Step = new Object()

Step.enviroments = () => enviroments.Index()


module.exports = Step
