const errorHendler = require('../config/errorHelper');
const Article = require('../models/article')


async function createArticle (data){
    const article = await Article.findOne({title: data.title,  owner: data.owner});
    if (article) {
        throw errorHendler.badRequest(`Article already exists`);
    }
    return await Article.create(data)
 }


 module.exports = {createArticle}