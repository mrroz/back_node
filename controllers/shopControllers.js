const productss = require('../models/singel-product')

module.exports.showProduct = (req, res) => {
    const product5 = productss.showAllproduct()
    res.render('shop', {
        pagetitle: 'shoproz',
        productArray: product5

    })
}