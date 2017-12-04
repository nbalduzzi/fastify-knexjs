'use strict'

const fastifyPlugin = require('fastify-plugin')
const knex = require('knex')

function fastifyKnexJS (fastify, opts, next) {
  try {
    const handler = knex(opts)
    fastify.decorate('knex', handler)
    next()
  } catch (err) {
    next(new Error(err))
  }
}

module.exports = fastifyPlugin(fastifyKnexJS, '>=0.30.0')
