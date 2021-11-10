const errorHendler = require('../config/errorHelper');
const Article = require('../models/article')
const { getUser } = require('./users.service')

async function createArticle(data) {
    const user = await getUser(data.owner) //check reference to specific user - owner
    const article = await Article.findOne({ title: data.title, owner: data.owner });
    if (article) {
        throw errorHendler.badRequest(`Article already exists`);
    }
    user.numberOfArticles++
    await user.save()
    return await Article.create(data)
}

async function updateArticle(patch, id) {
    await getUser(patch.owner)  //check reference to specific user - owner
    const article = await Article
                     .findOneAndUpdate({'_id':id, owner:patch.owner}, patch, {new: true,useFindAndModify: false}); 
    if (!article) {
        throw errorHendler.badRequest(`Article  doesn't exists`);
    }
    return article
}

async function getArticles (query) {
    const filters = ['title', 'subtitle', 'description', 'owner', 'category', 'createdAt', 'updatedAt']
    const propertysInArray = Object.keys(query)

    let allFounded = propertysInArray.every( ai => filters.includes(ai) )
    
    if(!allFounded){
        throw errorHendler.badRequest(`Wrong creteria`)
    }

    const articles = await Article.find(query).populate('owner','firstName lastName');
   
    return articles;
}

async function deleteArticle (id) {
    const article = await Article.findOne({_id: id})
    const user = await getUser(article.owner)
        if (!article) {
            throw errorHendler.notFound('No such article')
        }
    await article.remove()
    user.numberOfArticles--
    await user.save()
    return article
}


module.exports = { createArticle, updateArticle, deleteArticle, getArticles}