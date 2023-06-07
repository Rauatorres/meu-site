module.exports.getProjetos = async (app, req, res, projetos) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try{
        let projetosRes = await projetos.find().toArray()
        res.json(projetosRes)
    }catch (err){
        console.error(err)
        res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
    }
}

module.exports.getProjeto = async (app, req, res, projetos, ObjectId) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try{
      let projetoRes = await projetos.find({_id: new ObjectId(req.params.id)}).toArray()
      res.json(projetoRes)
    }catch (err){
      console.error(err)
      res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
    }
}

module.exports.getProjetoImg = async (app, req, res) => {
    const fs = require('fs')
    fs.readFile(`projetos_img/${req.params.img}`, (err, content)=>{
        if(err){
            res.status(500).json({error: err})
            return
        }
        res.writeHead(200, {"content-type": "image/jpg"})
        res.end(content)
    })
}

module.exports.inserirProjeto = async (app, req, res, projetos) => {
    try{
        let inserirProjeto = await projetos.insertOne(req.body)
        let projetoInserido = await projetos.find({_id: new ObjectId(inserirProjeto.insertedId)}).toArray()
        res.json(projetoInserido)
    }catch (err){
    console.error(err)
    res.status(500).json({error: "Ops! Parece que ocorreu um erro interno"})
    }
}