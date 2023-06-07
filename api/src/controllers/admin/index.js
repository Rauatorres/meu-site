module.exports.home = (app, req, res)=>{
    res.render('index')
}

module.exports.addTecnologia = async (app, req, res)=>{
    const axios = require('axios')

    let { body } = req

    try{
        await axios.post('http://localhost:3001/api/tecnologia', body)
        res.redirect('/')
    }catch(error){
        res.status(500).send(`<h1>Ops, parece que ocorreu um erro</h1><p>Erro: ${error}</p>`)
    }
}