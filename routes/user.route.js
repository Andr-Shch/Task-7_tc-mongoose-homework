const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.route('/')
      .post(userController.createUser);

router.route('/:userId')
      .get(userController.getUser)
      .put(userController.updateUser)
      .delete(userController.deleteUser)

router.route('/:userId/articles')
      .get(userController.getUserArticles)

module.exports = router;