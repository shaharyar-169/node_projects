const mongoose=require('mongoose');

const aboutSchema= new mongoose.Schema({
    title:String,
    about_description:String
})
module.exports=mongoose.model('About_Us', aboutSchema);