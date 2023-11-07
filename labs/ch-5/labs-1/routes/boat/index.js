'use strict'

const { boat } = require('../../model')

module.exports = async (fastify, opts) => {
  fastify.get('/:id', (request, reply) => {
    const { id } = request.params
    boat.read(id, (err, result) => {
      if (err) {
        if (err.code === 'E_NOT_FOUND') reply.notFound()
        else reply.send(err)
      } else reply.send(result)
    })
  })
}
