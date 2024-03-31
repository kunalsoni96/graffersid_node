let router = require('express').Router()
let cartController = require('./../controllers/cartController')

router.post('/create/:id', cartController.create)

router.get('/list', cartController.list)

router.put('/update/:id', cartController.update)

router.delete('/delete/:id', cartController.delete)


module.exports = router