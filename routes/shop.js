const express = require('express')

const router = express.Router()

const shopetController = require('../controllers/shopControllers')




router.get('/', shopetController.checkout)
    //router.get('/', shopetController.home)

router.get('/cart', shopetController.showCart)

router.get('/products', shopetController.checkout)

router.get('/products/:id', shopetController.oneproduct)

router.get('/checkout', shopetController.checkout)

router.post('/add-to-card', shopetController.checkout)










module.exports = router