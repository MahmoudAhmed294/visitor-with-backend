const jsonServer = require('json-server')
const dotenv = require('dotenv')

const server = jsonServer.create()
const router = jsonServer.router('company.json')
const middlewares = jsonServer.defaults()
dotenv.config()


server.use(middlewares)
server.use(router)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log('JSON Server is running')
})
