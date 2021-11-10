const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
    firstName: {
                type:String,
                minlength: [4, 'Must be at least 4 symbols, got {VALUE}'],
                maxlength:50,
                required:[true , 'Need name'],
                
                },
    lastName: {
               type:String,
               minlength: [3, 'Must be at least 3 symbols, got {VALUE}'],
               maxlength:60,
               required:[true , 'last name']},
    role:{
        type: String,
        enum: ['admin','writer','guest']
    },
    createdAt: {type: Date, 
                default: new Date()},
    numberOfArticles: {type:Number, default:0},
   // articles: [{type:ObjectId,ref:"Article"}] ,
    nickname: {type:String}
});


//delete reletet articles to User
UserSchema.pre('remove', function(next) {
    this.model('Article').remove({ owner: this._id }, next);
});

module.exports = mongoose.model('User', UserSchema);