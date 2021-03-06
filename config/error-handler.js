'use strict'

const errorHelper = require("./errorHelper");

module.exports = (app) => {
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = errorHelper.notFound('Not Found')
    return next(err)
  })

  // error handler // add valiation error, doesn't look good but works =)
  app.use((err, req, res, next) => {
   if (err.message.includes('Article validation failed')||err.message.includes('User validation failed')){
    const error = {
      code: 422,
      error: err.error,
      message: err.message
    }
    res.status(error.code).json(error)
   } else{

    const error = {
      code: err.code || 500,
      error: err.error,
      message: err.message
    }
    console.log('-----------------------------')
    console.log(error.message ? error.message : '')
    console.log(error.error ? error.error : '')
    console.log('-----------------------------')
    res.status(error.code).json(error)
  }
  })
}
