const productss = require('../models/singel-product')

module.exports.ProductPage = (req, res) => {
    res.render('adminViews/add-pro')

}

module.exports.addProduct = (req, res) => {
    const title = req.body.title
    const desc = req.body.desc
    const price = req.body.price
    const product6 = new productss(title, desc, price)
    product6.saveProduct()
        .then((result) => {

            console.log('product created!!!' + result);
            res.redirect('/admin/add-product')

        }).catch((err) => {
            console.log("ssssssssssssssssssssssssss");

        });
}


module.exports.showProduct = (req, res) => {

    const p = productss.showAllproduct()
    res.render('adminViews/product', {
        pagetitle: "محصولات ادمين",
        product: p,
    })



}