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
    const ProjetosDAO = new app.src.model.ProjetosDAO()
  
    await ProjetosDAO.inserir(req.body)
    res.redirect('/')
}

module.exports.deletarProjeto = async (app, req, res)=>{
    const ProjetosDAO = new app.src.model.ProjetosDAO()
  
    await ProjetosDAO.deletar({_id: req.params.id})
    res.redirect('/')
}

module.exports.editarProjeto = async (app, req, res)=>{
    const ProjetosDAO = new app.src.model.ProjetosDAO()
    let documento = await ProjetosDAO.mostrar({_id: req.params.id})

    await ProjetosDAO.editar(documento, req.body)
    res.redirect('/')
}

// tecnologias

module.exports.inserirTecnologia = async (app, req, res)=>{
    const TecnologiasDAO = new app.src.model.TecnologiasDAO()
  
    await TecnologiasDAO.inserir(req.body)
    res.redirect('/')
}

module.exports.deletarTecnologia = async (app, req, res)=>{
    const TecnologiasDAO = new app.src.model.TecnologiasDAO()
  
    await TecnologiasDAO.deletar({_id: req.params.id})
    res.redirect('/')
}

module.exports.editarTecnologia = async (app, req, res)=>{
    const TecnologiasDAO = new app.src.model.TecnologiasDAO()
    let documento = await TecnologiasDAO.mostrar({_id: req.params.id})

    await TecnologiasDAO.editar(documento, req.body)
    res.redirect('/')
}