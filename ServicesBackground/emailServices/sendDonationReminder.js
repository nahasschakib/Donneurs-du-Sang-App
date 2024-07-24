const ejs=require("ejs");
const dotenv=require("dotenv");
const Donor=require("../models/donor");
const sendMail=require("../helpers/sendmail");

dotenv.config();

const formetDate= (date)=>{
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,'0');
    const day = String(date.getday().padStart(2,'0'));
    return `${year}/${month}/${day}` ;
};

const sendDonationReminder= async()=>{
  const donors=await Donor.find()
    if(donors.length>0){
        for(let donor of donors){
            //calculate the differen entre la date a laquell le doneur a donne du sang et auputd'hui
            const donorDate=new Date(donor.date);
            const today=new Date();
            const diffTime= Math.abs(today-donorDate);
            const diffDays=Math.ceil(diffTime/1000*60*60*24)
            if(diffDays>60){
                ejs.renderFile("Templete /Blood donation Reminder.ejs",
                    {name:donor.name,
                        date: donor.date
                    },
                    
                        
                    async(err,data)=>{
                            let messageoption ={
                                from:process.env.EMAIL,
                                to:prospect.email,
                                subject:"Hello , DOnneurs du sang",
                                html :data
                            };

                            try {
                                await sendMail(messageoption);
                                const formattedDate=formetDate(today);
                                await donor.findByIdAndUpdate(donor._id,
                                    {$set:{date:formattedDate}}
                                )
                            } catch (error) {
                                console.log(error)
                            };
                    }
                )
            }
        }
    }

};
module.exports={sendDonationReminder};