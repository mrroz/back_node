const products = []

module.exports = class Product {

    constructor(title) {
        this.title = title
    }


    saveProductData() {
        products.push(this)

    }

    static showAllproducts() {

        return products
    }

}