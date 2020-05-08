const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const {MongoClient} = require('mongodb');

const UserSchema=new Schema({
    username: {
        type:String,
        required:true,
        //unqiue:true
        useCreateIndex: true
    },
    password:{
        type:String,
        minlength:5
    }
});

module.exports = mongoose.model('user', UserSchema);
