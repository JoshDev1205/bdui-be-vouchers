import Fastify from 'fastify'
import fastifyCors from 'fastify-cors'
import bdUiRoutes from './modules/bdui/routes'

const server = Fastify()

server.register(fastifyCors)
server.register(bdUiRoutes, { prefix: '/v1/vouchers' })

async function main() {
  try {
    await server.listen(3005, '0.0.0.0')
    console.log('Server BD UI running...')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
