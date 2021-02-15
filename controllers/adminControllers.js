const productss = require('../models/singel-product')

module.exports.ProductPage = (req, res) => {
    res.render('add-pro')

}

module.exports.addProduct = (req, res) => {
    const product6 = new productss(req.body.title)
    product6.saveProduct()
    console.log(product6)
    res.redirect('/')
}