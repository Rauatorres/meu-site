const {MongoClient} = require('mongodb')
const ObjectId = require('mongodb').ObjectId
const client = new MongoClient('mongodb+srv://rauatorres:meusite123@meu-site.twmm2ol.mongodb.net/?retryWrites=true&w=majority')
const db = client.db('meu-site')

module.exports = {
    //configs banco de dados
    client: client,
    db: db,
    ObjectId: ObjectId
}
