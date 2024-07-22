const mongoose =require("mongoose");

const DonorSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    address:{type:string},
    tel:{type:String},
    Bloodgroup:{type:String},
    Weight:{type:Number},
    date:{type:String},
    Diseases:{type:String},
    age:{type:Number},
    Bloodpressure:{type:Number},
    status:{type:Number}
})

module.exports=mongoose.model("Donors",DonorSchema)