const mongoose=require('mongoose');

const galleryschema= new mongoose.Schema([{
    imgUrl:String
}])
module.exports=mongoose.model('Gallery', galleryschema)