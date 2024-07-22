const mongoose=require("mongoose");

const ProspectSchema=mongoose.Schema({
    name:{type:String , require:true},
    email:{type:String ,require:true},
    password:{type:String ,require:true},
    status:{typre:Number},
    role:{type:String ,default:"admin"}
},
{
    timestamp:true
})

module.exports=mongoose.model("prospect",ProspectSchema)