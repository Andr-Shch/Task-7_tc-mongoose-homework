const express = require('express');
const router = express.Router();

const articlesController = require('../controllers/article')


router.route('/').post(articlesController.createArticle)


module.exports = router;