const express = require('express')
const router=express.Router()
const usercontroller = require('../controller/usercontroller')

router.get('/',usercontroller.login)
router.post('/',usercontroller.userLogin)
router.get('/signup',usercontroller.signup)
router.post('/signup',usercontroller.userSignup)
router.get('/home',usercontroller.home)
router.get('/logout',usercontroller.logout)

module.exports = router