let router = require('express').Router()
let productRoute = require('./productRoute')
let userRoute = require('./userRoute')
let cartRoute = require('./cartRoute')
router.use('/product', productRoute)
router.use('/user', userRoute)
router.use('/cart', cartRoute)

module.exports = router