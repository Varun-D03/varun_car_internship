const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connectDB(){

    mongoose.connect("mongodb+srv://varundaruna:ncHzgoRH5UrOqhV3@cluster0.vtbhope.mongodb.net/carrent" , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose