const productss = require('../models/singel-product')

module.exports.ProductPage = (req, res) => {
    res.render('adminViews/add-pro')

}

module.exports.addProduct = (req, res) => {
    const title = req.body.title
    const desc = req.body.desc
    const price = req.body.price


    const product6 = new productss(title, desc, price)
    const p = productss.showAllproduct()
    product6.saveProduct()
    console.log(p)
    res.redirect('/')
}


module.exports.showProduct = (req, res) => {

    const p = productss.showAllproduct()
    res.render('adminViews/product', {
        pagetitle: "محصولات ادمين",
        product: p,
    })



}