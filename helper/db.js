const mongoose=require('mongoose')
const {MongoClient} = require('mongodb');
const dbPath = 'mongodb+srv://yelisdurmus:yeliz1234@movie-api-nodejs-r1xkw.mongodb.net/test?retryWrites=true&w=majority';
module.exports=()=>{
    //mongoose.connect('mongodb+srv://yelisdurmus:yeliz1234@movie-api-nodejs-r1xkw.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true } );
    mongoose.connect('mongodb+srv://yelisdurmus:yeliz1234@movieapi-ke66e.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true } );
        mongoose.connection.on('open',()=>{
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('err',(err)=>{
        console.log('MongoDB: Error', err);
    });
    mongoose.Promise=global.Promise;
};
/*// database.js
const mongoose = require("mongoose");
const dbPath = "mongodb://<dbuser>:<dbpassword>@ds250607.mlab.com:38485/test-db";
mongoose.connect(dbPath, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;*/
/*
const uri = 'mongodb+srv://yelisdurmus:yeliz1234@movie-api-nodejs-r1xkw.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri);
*/
