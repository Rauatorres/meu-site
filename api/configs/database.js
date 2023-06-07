const {MongoClient} = require('mongodb')
const ObjectId = require('mongodb').ObjectId
const client = new MongoClient('mongodb+srv://rauatorres:meusite123@meu-site.twmm2ol.mongodb.net/?retryWrites=true&w=majority')

module.exports = async ()=>{
    //configs banco de dados
    await client.connect()
    const db = client.db('meu-site')

    return {
        db: db,
        projetos: db.collection('projetos'),
        tecnologias: db.collection('tecnologias'),
        ObjectId: ObjectId
    }
}
