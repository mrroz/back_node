const products = []

module.exports.ProductPage = (req, res) => {
    res.render('add-pro')

}


module.exports.addProduct = (req, res) => {
    products.push({ title: req.body.title })
    console.log(products)
    res.redirect('/')

}



module.exports.showProduct = (req, res) => {
    res.render('shop', {
        pagetitle: 'shoproz',
        productArray: products

    })
}