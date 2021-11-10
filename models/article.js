const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
    title: {
          type: String, 
          minlength:[5, 'Must be at least 5 symbols, got {VALUE}'], 
          maxlength: 400, 
          index: true, 
          required: [true , 'Need tittle'],
      
           },
    subtitle: { 
              type: String,
              minlength: [5, 'Must be at least 5 symbols in subtitle, got {VALUE}']
              },
    description: { 
                   type: String,
                   minlength: [5, 'Must be at least 5 symbols in subtitle, got {VALUE}'], 
                   maxlength: 5000,
                   required: true
                 },
    owner: { type: ObjectId, ref: 'User', required: true },
    category: { type: String, enum: ['sport', 'games', 'history'], required: true }
}, {
    timestamps: true
})



module.exports = mongoose.model('Article', ArticleSchema)