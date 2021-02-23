const mongodb = require('mongodb')
const mongodbClient = mongodb.MongoClient

const URL = 'mongodb://localhost:27017'
const dbName = 'mrShop'

let dbSet;

const mongodbConnect = (cb) => {
    mongodbClient.connect(URL, { useNewUrlParser: true })
        .then(client => {
            console.log("connect to db !!!!!!")
            dbSet = client.db(dbName)
            cb(client)
        })
        .catch(err => {
            //console.log("errrrrrrrro")
            console.log(err)
                // throw err
        })


}


const getDB = () => {
    if (dbSet) {
        return dbSet
    }

    throw 'no database found'
}



exports.mongodbConnect = mongodbConnect
exports.getDB = getDB