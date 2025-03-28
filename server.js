const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('/api', router)
server.use((req,res,next)=>{
  res.header('access-control-Allow-Origin','https://petermunene.github.io')
  res.header('access-control-Allow-Headers','*')
  res.header('access-control-Allow-Methods','*')
})
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})


