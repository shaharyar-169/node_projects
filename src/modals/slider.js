const mongoose=require('mongoose');

const sliderschema= new mongoose.Schema({
    title:String,
    subtitle:String,
    imageurl:String,
    class:String
})

module.exports=mongoose.model('Slider', sliderschema);