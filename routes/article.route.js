const express = require('express');
const router = express.Router();

const articlesController = require('../controllers/article')


router.route('/')
      .post(articlesController.createArticle)
      .get(articlesController.getArticles)

router.route('/:articleId')
      .put(articlesController.updateArticle)
      .delete(articlesController.deleteArticle)

module.exports = router;