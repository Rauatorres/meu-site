module.exports = (app)=>{
    app.get('/', async (req, res)=>{
        app.src.controllers.admin.index.index(app, req, res)
    })
    app.get('/home', async (req, res)=>{
        app.src.controllers.admin.index.home(app, req, res)
    })
    app.post('/login', async (req, res)=>{
        app.src.controllers.admin.index.login(app, req, res)
    })


    app.post('/addprojeto', (req, res)=>{
        app.src.controllers.admin.index.inserirProjeto(app, req, res)
    })

    app.get('/delprojeto/:id', (req, res)=>{
        app.src.controllers.admin.index.deletarProjeto(app, req, res)
    })

    app.get('/editarprojeto/:id', (req, res)=>{
        app.src.controllers.admin.index.pageditar(app, req, res, 'projeto')
    })

    app.post('/editarprojeto/:id', (req, res)=>{
        app.src.controllers.admin.index.editarProjeto(app, req, res)
    })

    app.post('/addtecnologia', (req, res)=>{
        app.src.controllers.admin.index.inserirTecnologia(app, req, res)
    })

    app.get('/deltecnologia/:id', (req, res)=>{
        app.src.controllers.admin.index.deletarTecnologia(app, req, res)
    })

    app.get('/editartecnologia/:id', (req, res)=>{
        app.src.controllers.admin.index.pageditar(app, req, res, 'tecnologia')
    })

    app.post('/editartecnologia/:id', (req, res)=>{
        app.src.controllers.admin.index.editarTecnologia(app, req, res)
    })


}