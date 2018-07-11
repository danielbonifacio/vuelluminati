'use strict'

const path = require('path')
const root = '../..'
const core = 'src/core'

const config = path.join(root, core, 'config')

const Env = path.join(__dirname, config, 'env.json')
const Envs = path.join(__dirname, config, 'envs.json')

module.exports = { Env, Envs }
