const {MongoClient} = require('mongodb')
const ObjectId = require('mongodb').ObjectId

require('dotenv').config()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const client = new MongoClient(`mongodb+srv://${username}:${password}@meu-site.twmm2ol.mongodb.net/?retryWrites=true&w=majority`)
const db = client.db('meu-site')

module.exports = {
    //configs banco de dados
    client: client,
    db: db,
    ObjectId: ObjectId
}
