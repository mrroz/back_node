const productss = require('../models/singel-product')

module.exports.ProductPage = (req, res) => {
    res.render('adminViews/add-pro')

}

module.exports.addProduct = (req, res) => {
    const product6 = new productss(req.body.title)
    const p = productss.showAllproduct()
    product6.saveProduct()
    console.log(p)
    res.redirect('/')
}