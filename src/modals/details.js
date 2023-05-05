const mongoose=require('mongoose');

const detailschema= new mongoose.Schema({
    branname:String,
    brandiconurl:String,
    links:[
        {
            lable:String,
            url:String
        },
    ]
})

module.exports=mongoose.model('details',detailschema)