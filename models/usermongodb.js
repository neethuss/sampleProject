const mongoose = require('mongoose')   //requiring modules for mongodb

mongoose.connect("mongodb://localhost:27017/FinalProject")                   //connect mongodb database to node
.then(()=>{
  console.log("mongobd connected")
})
.catch(()=>{
  console.log("Failed to connect")
})

//creating schema
const LoginSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }

}) 
const Collection = new mongoose.model('UserDetails',LoginSchema)

module.exports = Collection