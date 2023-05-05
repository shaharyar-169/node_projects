const mongoose=require('mongoose');

cosst= bannerSchema=new mongoose.Schema({
    firstbabnner:{
        bannertitle:String,
        discription:String,
        bannerurl:String
    },
    secondbanner:{
        bannertitle:String,
        discription:String,
        bannerurl:String
    }
})

module.exports=mongoose.model('Banners', bannerSchema);