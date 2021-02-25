const productss = require('../models/singel-product')
const mongodb = require('mongodb')

module.exports.home = (req, res) => {
    productss.showAllproduct()
        .then((result) => {
            res.render('shopViews/shop', {
                product: result
            })
        }).catch((err) => {
            console.log(err);
        });

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


module.exports.addToCard = (req, res) => {

    const pid = req.body.pid
    console.log(pid);
    res.redirect('/')


}


module.exports.oneproduct = (req, res) => {
    const id = req.params.id
    productss.oneproduct(id)
        .then((result) => {

            res.render('shopViews/produt-details', {
                product: result
            })


        }).catch((err) => {
            console.log('خطا در كنترلر');
        });
}