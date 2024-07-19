const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config()

const DB =process.env.DB;

dbConnnection = async()=>{
    try{ await mongoose.connect(DB).then(()=>{
        console.log("Database connected successfuly");
    })
} catch (error) {
        console.log(error);
        setTimeout(dbConnnection,5000)
    };
}

 
module.exports=dbConnnection;