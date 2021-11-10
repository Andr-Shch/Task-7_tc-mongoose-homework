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


module.exports = {createArticle}