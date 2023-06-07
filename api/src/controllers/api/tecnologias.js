module.exports.getTecnologias = async (app, req, res, tecnologias) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try{
      let tecnologiasRes = await tecnologias.find().toArray()
      res.json(tecnologiasRes)
    }catch (err){
      console.error(err)
      res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
    }
}

module.exports.inserirTecnologia = async (app, req, res, tecnologias, ObjectId)=>{
  try{
    let inserirTecnologia = await tecnologias.insertOne(req.body)
    let tecnologiaInserida = await tecnologias.find({_id: new ObjectId(inserirTecnologia.insertedId)}).toArray()
    res.json(tecnologiaInserida)
  }catch (err){
    console.error(err)
    res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
  }
}

module.exports.getTecnologiaImg = async (app, req, res) => {
  const fs = require('fs')
  fs.readFile(`tecnologias_img/${req.params.img}`, (err, content)=>{
      if(err){
          res.status(500).json({error: err})
          return
      }
      res.writeHead(200, {'content-type': 'img/jpg'})
      res.end(content)
  })
}
