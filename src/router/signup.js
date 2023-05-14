const express = require('express')
const router = express.Router()

const signupController = require('../app/controller/SignupController')

router.get('/', signupController.show)


module.exports = router