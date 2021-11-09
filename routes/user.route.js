const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.route('/').post(userController.createUser);

router.route('/:userId').put(userController.updateUser)

module.exports = router;