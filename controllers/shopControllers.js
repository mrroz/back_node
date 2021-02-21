const productss = require('../models/singel-product')

module.exports.home = (req, res) => {
    const product5 = productss.showAllproduct()
    res.render('shopViews/home', {
        pagetitle: 'shoproz',
        productArray: product5

    })
}


module.exports.showCart = (req, res) => {

    res.render('shopViews/cart', {
            pagetitle: 'سبد خريد',

        }


    )


}

module.exports.showproducts = (req, res) => {
    res.render('shopViews/shop', )

}





module.exports.checkout = (req, res) => {
    const product5 = productss.showAllproduct()
    res.render('shopViews/shop', {
        pagetitle: "سبد خريد",
        product: product5,
    })

}


module.exports.oneproduct = (req, res) => {
    const id = req.params.id
    console.log(id);
    res.redirect('/')
}