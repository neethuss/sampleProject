const express = require('express')
const router=express.Router()
const admincontroller = require('../controller/admincontroller')

router.get('/',admincontroller.admin)
router.post('/',admincontroller.adminLogin)
router.get('/dashboard',admincontroller.dashboard)
module.exports = router