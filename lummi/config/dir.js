'use strict'

const path = require('path')
const root = '../..'

const Config = path.join(root, 'src/core/Config')
const Env = path.join(__dirname, Config, 'env.json')
const Envs = path.join(__dirname, Config, 'envs.json')
const Root = path.join(__dirname, root)
const Components = path.join(__dirname, root, 'src/components')
const Modules = path.join(__dirname, root, 'src/core/Store/modules')

module.exports = { Env, Envs, Root, Components, Modules, Config }
