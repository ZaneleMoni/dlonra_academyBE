const userController = require('../controllers/user.controller.js')
const router = require('express').Router()

router.post('./addUser', userController.addUser)
router.get('./allUsers', userController.getAllUsers)
router.get('./:id', userController.getOneUser)

module.exports= router