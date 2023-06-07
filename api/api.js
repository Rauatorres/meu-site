//configs do servidor
const app = require('./configs/server')

var porta = 3001

app.listen(porta, ()=>{
  console.log(`Servidor rodando em localhost:${porta}`)
})

//finalizando processo e conexão com banco de dados
process.on('SIGINT', async ()=>{
  await client.close()
  process.exit()
})
