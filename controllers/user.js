const {createUserModel,
       updateUserFilds} = require('../services/users.service')



const createUser = async (req, res, next) => {
  try {
    const data = req.body
    const result = await createUserModel(data)
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
  
}

const updateUser = async (req, res, next) => {
  try {
    const {userId}=req.params
    const patch = req.body
    const result = await updateUserFilds(userId, patch);
    return res.status(201).json(result)
  } catch (error) {
    next(error);
  }
}




module.exports = {createUser,
                  updateUser           }