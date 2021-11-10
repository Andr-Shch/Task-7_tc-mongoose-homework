const service = require('../services/users.service')



const createUser = async (req, res, next) => {
  try {
    const data = req.body
    console.log(data);
    const result = await service.createUser(data)
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
  
}

const updateUser = async (req, res, next) => {
  try {
    const {userId}=req.params
    const patch = req.body
    const result = await service.updateUser(userId, patch);
    return res.status(200).json(result)
  } catch (error) {
    next(error);
  }
}

const getUser = async (req, res, next) => {
  try {
    const {userId}=req.params
    const result = await service.getUser(userId)
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
 const deleteUser = async (req, res, next) => {
   try {
    const {userId}=req.params
    const result = await service.deleteUserAndArticles(userId)
    return res.status(200).json(result)
   } catch (error) {
    next(error)
   }
 }

const getUserArticles = async (req, res, next) => {
  try {
    const {userId}=req.params
    const result = await service.getUserArticles(userId)
   
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}



module.exports = {createUser,
                  updateUser, 
                  getUser, 
                  deleteUser,
                  getUserArticles }