const getDB = require('../util/database').getDB

class Product {

    constructor(title, descerption, price) {
        this.title = title
        this.descerption = descerption
        this.price = price
        this.id = Math.floor(Math.random() * 10)

    }

    saveProduct() {
        const db = getDB()
        return db.collection('product').insertOne(this)
            .then((result) => {
                console.log(result + 'collection acreat*****');
            }).catch((err) => {
                console.log(err);

            });

    }

    static showAllproduct() {
        //morteza roozbehi
        const db = getDB()
        return db.collection('product').find().toArray()
            .then((result) => {
                console.log(result)
                return result
            }).catch((err) => {
                console.log(err)

            });
    }
}

module.exports = Product









// const products = []

// module.exports = class Product {

//     constructor(title, descerption, price) {
//             this.title = title
//             this.descerption = descerption
//             this.price = price
//             this.id = Math.floor(Math.random() * 10)

//         }
//         /////

//     saveProduct() {

//         products.push(this)
//     }

//     static showAllproduct() {
//         return products
//     }

// }