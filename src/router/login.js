const express = require('express')
const router = express.Router()

const loginController = require('../app/controller/LoginController')

router.get('/', loginController.show)

module.exports = router