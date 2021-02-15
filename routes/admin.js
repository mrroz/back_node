const express = require('express')
const path = require('path')
const router = express.Router()
const adminControllers = require('../controllers/adminControllers')


///////////////////////////////////////////////////////////////////                               routes

router.get('/add-product', adminControllers.ProductPage)

router.post('/add-product', adminControllers.addProduct)



////////////////////////////////////////////////////////////////                               exports
//morteza roozbehi// exports.routes = router
// exports.product = products

module.exports = router