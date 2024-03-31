let router = require('express').Router()
let productController = require('./../controllers/productController')

router.post('/create/:id', productController.create)

router.get('/list', productController.list)

router.put('/update/:id', productController.update)

router.delete('/delete/:id', productController.delete)

module.exports = router