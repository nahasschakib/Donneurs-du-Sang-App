const express=require("express");
const authRoute=require("./routes/auth")
const donorRoute =require("./routes/donor");
const prospectRoute=require("./routes/prospect");
const cors=require("cors");
const app=express();



 //CORS
  app.use(cors());


//JSON
  app.use(express.json());


//ROUTE
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/donors",donorRoute)
app.use("/api/v1/prospect",prospectRoute)



module.exports=app;