let router = require('express').Router()
let userController = require('./../controllers/userController')

router.post('/create', userController.create)

router.get('/list', userController.list)

router.put('/update/:id', userController.update)

router.delete('/delete/:id', userController.delete)

module.exports = router