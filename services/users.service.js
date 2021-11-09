const errorHendler = require('../config/errorHelper');
const User = require('../models/user')
 

async function createUserModel(data) {
    const existingUser = await User.findOne({firstName: data.firstName,  lastName: data. lastName});
    if (existingUser) {
        throw errorHendler.badRequest(`User already exists`);
    }
    return await User.create(data)
}

async function updateUserFilds(id,patch){
     const user = await User.findOneAndUpdate({'_id':id}, patch, {new: true});
     if (!user) {
         throw errorHendler.notFound('User doesn`t exist or deleted')
     }

     return user
}


    module.exports = {createUserModel, updateUserFilds}