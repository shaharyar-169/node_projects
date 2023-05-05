const mongoose=require('mongoose');

const contectschema= new mongoose.Schema({
    email:String,
    number:Number,
    query:String
})

module.exports=mongoose.model('Contect', contectschema)