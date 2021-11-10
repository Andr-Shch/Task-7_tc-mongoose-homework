const errorHendler = require('../config/errorHelper');
const User = require('../models/user')
const ArticleModel = require('../models/article')

async function createUser(data) {
    const existingUser = await User.findOne({firstName: data.firstName,  lastName: data. lastName});
    if (existingUser) {
        throw errorHendler.badRequest(`User already exists`);
    }
    return await User.create(data)
}

async function updateUser(id,patch) {
     const user = await User.findOneAndUpdate({'_id':id}, patch, {new: true,useFindAndModify: false});
     if (!user) {
         throw errorHendler.notFound('User doesn`t exist or deleted')
     }
     return user
}

async function getUser (id){
   const user = await User.findOne({'_id':id})
   if (!user) {
      throw errorHendler.notFound('User doesn`t exist or deleted')
   }
   return user
}

async function deleteUserAndArticles(id){
    const user = await    User.findById(id, function (err, doc) {
        if (err) {
      console.log(err);
        }
        doc.remove(); // it trigers ../models/users.js line 20
    })
    if (!user) {
        throw errorHendler.notFound('User doesn`t exist or deleted')
     }
   //  await ArticleModel.remove( { owner: id })  
     return user
}
    module.exports = {createUser, updateUser, getUser, deleteUserAndArticles}