const ejs=require("ejs");
const dotenv=require("dotenv");
const Donor=require("../models/donor");
const sendMail=require("../helpers/sendmail");

dotenv.config();

const sendDonorDetailsEmail=async()=>{
const donors=await Donor.find({status:0})
if(Donor.length >0){
    for(let donor of donors){
        ejs.renderFile("Templete/Blood Donor.ejs",
            {
                name:donor.name,
                email:donor.email,
                tel:donor.tel,
                address:donor.address,
                bloodgroup:donor.bloodgroup,
                diseases:donor.diseases,
                weight:donor.weight,
                bloodpressure:donor.blooddpressure,
                age:donor.age,
                date:donor.date

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
                    await donor.findByIdAndUpdate(donor._id,
                        {$set:{status:1}
                    }
                    )
                } catch (error) {
                    console.log(error)
                };

            }
        )
    }

}
};

module.exports={sendDonorDetailsEmail};