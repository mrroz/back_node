const express = require('express')

const router = express.Router()

const shopetController = require('../controllers/shopControllers')




router.get('/', shopetController.showProduct)






module.exports = router