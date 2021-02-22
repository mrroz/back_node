const products = []

module.exports = class Product {

    constructor(title, descerption, price) {
            this.title = title
            this.descerption = descerption
            this.price = price
            this.id = Math.floor(Math.random() * 10)

        }
        /////

    saveProduct() {

        products.push(this)
    }

    static showAllproduct() {
        return products
    }

}