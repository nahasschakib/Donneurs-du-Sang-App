const app=require("./app");
const dotenv=require("dotenv");
const dbConnnection=require("./utilis/db");


dotenv.config()

//Port
const PORT=process.env.PORT

//DB
const DB=process.env.DB

 
/*mongoose.connect(DB).then(()=>{
    console.log("DataBase connect successfylly")
}).catch((err)=>{
    console.log("err")
})*/


//Server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    dbConnnection()
});