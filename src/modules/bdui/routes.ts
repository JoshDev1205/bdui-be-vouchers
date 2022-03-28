import { FastifyInstance } from 'fastify'
import { getUserVoucherHandler } from './controllers'

const routes = async (server: FastifyInstance) => {
  server.get('/:code', getUserVoucherHandler)
}

export default routes
