const express=require("express");
const authRoute=require("./routes/auth")
const cors=require("cors");
const app=express();



 //CORS
  app.use(cors());


//JSON
  app.use(express.json());


//ROUTE
app.use("/api/v1/auth", authRoute)



module.exports=app;