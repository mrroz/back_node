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


module.exports.deleteOne = (req, res) => {
    const id = req.body.id
    productss.deleteOne(id)
        .then((result) => {
            console.log('حذف شد');
            res.redirect('/admin/product')
        }).catch((err) => {
            console.log('حذف نشددددد');

        });

}


module.exports.showProduct = (req, res) => {
    productss.showAllproduct()
        .then((result) => {
            res.render('adminViews/product', {
                pagetitle: "محصولات ادمين",
                product: result,
            })
        }).catch((err) => {
            console.log('خطا در نمايش محصولات ادمين');
        });



}