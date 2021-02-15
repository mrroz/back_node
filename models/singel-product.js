const products = []

module.exports = class Product {

    constructor(title) {
        this.title = title
    }

    saveProduct() {
        products.push(this)
    }

    static showAllproduct() {
        return products
    }

}