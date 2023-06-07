module.exports = async (app)=>{

  const dbconfigs = await app.configs.database

  const db = dbconfigs.db,
  projetos = dbconfigs.projetos,
  tecnologias = dbconfigs.tecnologias,
  ObjectId = dbconfigs.ObjectId

  //chamadas
  
  app.get('/api/projetos', async (req, res)=>{
    app.src.controllers.api.projetos.getProjetos(app, req, res, projetos)
  })
  
  app.get('/api/projetos/:id', async (req, res)=>{
    app.src.controllers.api.projetos.getProjeto(app, req, res, projetos, ObjectId)
  })
  
  app.get('/projetos_img/:img', (req, res)=>{
    app.src.controllers.api.projetos.getProjetoImg(app, req, res)
  })
  
  app.post('/api/projeto', (req, res)=>{
    app.src.controllers.api.projetos.inserirProjeto(app, req, res, projetos)
  })
  
  app.get('/api/tecnologias', async (req, res)=>{
    app.src.controllers.api.tecnologias.getTecnologias(app, req, res, tecnologias)
  })
  
  app.get('/tecnologias_img/:img', (req, res)=>{
    app.src.controllers.api.tecnologias.getTecnologiaImg(app, req, res)
  })

  app.post('/api/tecnologia', (req, res)=>{
    app.src.controllers.api.tecnologias.inserirTecnologia(app, req, res, tecnologias, ObjectId)
  })
}