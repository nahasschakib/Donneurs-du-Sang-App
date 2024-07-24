const express=require("express");
const app = express();
const dotenv =require("dotenv");
const dbConnection=require("./utilis/db");
const cron=require("node-cron");
const { sendEligibilityEmail } = require("./emailServices/sendEligibilityEmail");
const { sendDetailsProspectEmail } = require("./emailServices/sendDetailsProspect");
const { sendDonationReminder } = require("./emailServices/sendDonationReminder");
const { sendDonorDetailsEmail } = require("./emailServices/sendDonorDetailsEmail");

dotenv.config()



//SERVER

const DB =process.env.DB;

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`ServicesBackground is running on port ${PORT}`)
   dbConnection();
})

//SCHEDULE TASK

const run =()=>{

    cron.schedule('* * * * * ', () => {
        sendDetailsProspectEmail();
        sendEligibilityEmail();
        sendDonationReminder();
        sendDonorDetailsEmail();
      });
}
run();