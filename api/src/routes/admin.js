module.exports = (app)=>{
    app.get('/', async (req, res)=>{
        app.src.controllers.admin.index.home(app, req, res)
    })

    app.post('/addtecnologia', (req, res)=>{
        app.src.controllers.admin.index.addTecnologia(app, req, res)
    })
}