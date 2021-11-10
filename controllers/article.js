const service = require('../services/article.service')


const createArticle = async (req, res, next) => {
    try {
      const data = req.body
      const result = await service.createArticle(data)   
      return res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

const updateArticle = async (req, res, next) => {
  try {
    const {articleId}=req.params
    const patch = req.body
    const result = await service.updateArticle(patch, articleId)
    return res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}


async function getArticles(req, res, next) {
  try {
    const query = req.query
    console.log(query);
    let result = await service.getArticles(query)
    return res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}



async function deleteArticle(req, res, next) {

  const {articleId} = req.params

  try {
     // const result = await Article.findByIdAndDelete(articleId)
      const result = await service.deleteArticle(articleId)
      return res.status(200).json(result);
  } catch (err) {
      console.log(err);
      next(err);
  }
}


module.exports = {createArticle, updateArticle, getArticles ,deleteArticle}