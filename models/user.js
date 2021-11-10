const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
    firstName: {type:String,min:4,max:50,required:true},
    lastName: {type:String,min:3,max:60,required:true},
    role:{
        type: String,
        enum: ['admin','writer','guest']
    },
    createdAt: {type: Date, default: new Date()},
    numberOfArticles: {type:Number, default:0},
    articles: [{type:ObjectId,ref:"Article"}] ,
    nickname: {type:String}
});


//delete reletet articles to User
UserSchema.pre('remove', function(next) {
    this.model('Article').remove({ owner: this._id }, next);
});

module.exports = mongoose.model('User', UserSchema);