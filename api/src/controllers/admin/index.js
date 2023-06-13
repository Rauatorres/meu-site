module.exports.home = async (app, req, res)=>{
    const ProjetosDAO = new app.src.model.ProjetosDAO()
    const TecnologiasDAO = new app.src.model.TecnologiasDAO()

    let projetos = await ProjetosDAO.mostrarTodos()
    let tecnologias = await TecnologiasDAO.mostrarTodos()
    res.render('index', {projetos: projetos, tecnologias: tecnologias})
}

module.exports.pageditar = async ( app, req, res, col)=>{
    if(col == 'projeto'){
        const ProjetosDAO = new app.src.model.ProjetosDAO()
        
        let projeto = await ProjetosDAO.mostrar({_id: req.params.id})
    
        res.render('editar', {col: col, projeto: projeto})
        return
    }
    const TecnologiasDAO = new app.src.model.TecnologiasDAO()
    
    let tecnologia = await TecnologiasDAO.mostrar({_id: req.params.id})

    res.render('editar', {col: col, tecnologia: tecnologia})
    
}

// projetos

module.exports.inserirProjeto = async (app, req, res)=>{
    const fs = require('fs')
    const path = require('node:path')
    const ProjetosDAO = new app.src.model.ProjetosDAO()
    let timestamp = Date.now()
    
    let imgFileName = timestamp + '_' + req.files.img.name
    let newPath = path.normalize(__dirname + '/../../../api_img/projetos')

    await fs.promises.rename(req.files.img.path, `${newPath}/${imgFileName}`)

    req.body.img = imgFileName

    await ProjetosDAO.inserir(req.body)
    res.redirect('/')
}

module.exports.deletarProjeto = async (app, req, res)=>{
    const ProjetosDAO = new app.src.model.ProjetosDAO()
  
    await ProjetosDAO.deletar({_id: req.params.id})
    res.redirect('/')
}

module.exports.editarProjeto = async (app, req, res)=>{
    const fs = require('fs')
    const path = require('node:path')
    const ProjetosDAO = new app.src.model.ProjetosDAO()
    let documento = await ProjetosDAO.mostrar({_id: req.params.id})
    let timestamp = Date.now()
    let { body } = req
    
    let imgFileName = timestamp + '_' + req.files.img.name
    let newPath = path.normalize(__dirname + '/../../../api_img/projetos')

    await fs.promises.rename(req.files.img.path, `${newPath}/${imgFileName}`)
    await fs.promises.unlink(`${newPath}/${body.img_old}`)

    body.img = imgFileName
    delete body.img_old

    await ProjetosDAO.editar(documento, body)
    res.redirect('/')
}

// tecnologias

module.exports.inserirTecnologia = async (app, req, res)=>{
    const fs = require('fs')
    const path = require('node:path')
    const TecnologiasDAO = new app.src.model.TecnologiasDAO()
    let timestamp = Date.now()
    
    let imgFileName = timestamp + '_' + req.files.img.name
    let newPath = path.normalize(__dirname + '/../../../api_img/tecnologias')

    await fs.promises.rename(req.files.img.path, `${newPath}/${imgFileName}`)

    req.body.img = imgFileName

    await TecnologiasDAO.inserir(req.body)
    res.redirect('/')
}

module.exports.deletarTecnologia = async (app, req, res)=>{
    const TecnologiasDAO = new app.src.model.TecnologiasDAO()
  
    await TecnologiasDAO.deletar({_id: req.params.id})
    res.redirect('/')
}

module.exports.editarTecnologia = async (app, req, res)=>{
    const fs = require('fs')
    const path = require('node:path')
    const TecnologiasDAO = new app.src.model.TecnologiasDAO()
    let documento = await TecnologiasDAO.mostrar({_id: req.params.id})
    let timestamp = Date.now()
    let { body } = req
    
    let imgFileName = timestamp + '_' + req.files.img.name
    let newPath = path.normalize(__dirname + '/../../../api_img/tecnologias')

    await fs.promises.rename(req.files.img.path, `${newPath}/${imgFileName}`)
    await fs.promises.unlink(`${newPath}/${body.img_old}`)

    body.img = imgFileName
    delete body.img_old

    await TecnologiasDAO.editar(documento, body)
    res.redirect('/')
}