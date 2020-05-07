const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const {MongoClient} = require('mongodb');

const DirectorSchema=new Schema({
    name:String,
    surname:String,
    bio:String,
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

module.exports=mongoose.model('director',DirectorSchema);
