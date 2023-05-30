//configs do servidor
const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
{MongoClient} = require('mongodb'),
ObjectId = require('mongodb').ObjectId,
crypto = require('crypto'),
fs = require('fs'),
multiparty = require('connect-multiparty')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('./'))

var porta = 3001

//configs banco de dados
const client = new MongoClient('mongodb+srv://rauatorres:meusite123@meu-site.twmm2ol.mongodb.net/?retryWrites=true&w=majority')

async function conectarAoBancoDeDados(){
  await client.connect()
}

conectarAoBancoDeDados()

const db = client.db('meu-site'),
projetos = db.collection('projetos'),
tecnologias = db.collection('tecnologias')

//script para adicionar chaves para ter acesso de administrador
//retirar quando colocar em produção após adicionar a primeira chave
app.post('/api/adminkey', async (req, res)=>{
  try{
    let adminkey = req.body.key
    let adminkeys = db.collection('adminkeys')
    let adminkeyEncrypted = crypto.createHash('md5').update(adminkey).digest('hex')
    await adminkeys.insertOne({key: adminkeyEncrypted})
    res.json({msg: "chave inserida"})
  }catch (err){
    res.status(500).json({error: "Ops! Parece que ocorreu um erro!"})
  }
  
})

//chamadas
app.get('/', async (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if(req.query.adminkey != undefined){
    let adminkey = req.query.adminkey
    console.log('teste')
    let adminkeyEncrypted = crypto.createHash('md5').update(adminkey).digest('hex')
    let adminkeys = db.collection('adminkeys')
    let adminkeySearchResult = await adminkeys.find({key: adminkeyEncrypted}).toArray()
    console.log(adminkeySearchResult.length)
    if(adminkeySearchResult.length == 1){
      let data = await fs.promises.readFile('admin.html', 'utf8')
      res.send(data)
      return
    }
  }
  res.send('Bem vindo à minha api!')
})

app.get('/api/projetos', async (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  try{
    let projetosRes = await projetos.find().toArray()
    res.json(projetosRes)
  }catch (err){
    console.error(err)
    res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
  }
})

app.get('/api/projetos/:id', async (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  try{
    let projetoRes = await projetos.find({_id: new ObjectId(req.params.id)}).toArray()
    res.json(projetoRes)
  }catch (err){
    console.error(err)
    res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
  }
})

app.get('/projetos_img/:img', (req, res)=>{
  fs.readFile(`projetos_img/${req.params.img}`, (err, content)=>{
    if(err){
      res.status(500).json({error: err})
      return
    }
    res.writeHead(200, {"content-type": "image/jpg"})
    res.end(content)
  })
})

app.post('/api', async (req, res)=>{
  try{
    let inserirProjeto = await projetos.insertOne(req.body)
    let projetoInserido = await projetos.find({_id: new ObjectId(inserirProjeto.insertedId)}).toArray()
    res.json(projetoInserido)
  }catch (err){
    console.error(err)
    res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
  }
})

app.get('/api/tecnologias', async (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  try{
    let tecnologiasRes = await tecnologias.find().toArray()
    res.json(tecnologiasRes)
  }catch (err){
    console.error(err)
    res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
  }
})

app.get('/tecnologias_img/:img', (req, res)=>{
  fs.readFile(`tecnologias_img/${req.params.img}`, (err, content)=>{
    if(err){
      res.status(500).json({error: err})
      return
    }
    res.writeHead(200, {'content-type': 'img/jpg'})
    res.end(content)
  })
})

app.listen(porta, ()=>{
  console.log(`Servidor rodando em localhost:${porta}`)
})

//finalizando processo e conexão com banco de dados
process.on('SIGINT', async ()=>{
  await client.close()
  process.exit()
})
