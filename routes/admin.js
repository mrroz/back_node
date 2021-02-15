const express = require('express')
const path = require('path')
const router = express.Router()
const productController = require('../controllers/products')

///////////////////////////////////////////////////////////////////                               routes

router.get('/add-product', productController.ProductPage)

router.post('/add-product', productController.addProduct)



////////////////////////////////////////////////////////////////                               exports
//morteza roozbehi// exports.routes = router
// exports.product = products

module.exports = router