const productss = require('../models/singel-product')

module.exports.ProductPage = (req, res) => {
    res.render('add-pro')

}


module.exports.addProduct = (req, res) => {
    const product6 = new productss(req.body.title)
    product6.saveProductData()
    console.log(product6)
    res.redirect('/')

}



module.exports.showProduct = (req, res) => {
    const product5 = productss.showAllproducts()
    res.render('shop', {
        pagetitle: 'shoproz',
        productArray: product5

    })
}