const ejs =require("ejs");
const dotenv=require("dotenv");
const prospect =require("../models/prospect");
const sendMail=require("../helpers/sendmail");


dotenv.config();

const sendEligibilityEmail = async ()=>{
    const prospects =await prospect.find({status:0});
    if(prospect.length>0){
        for(let prospect of prospects){
            if(prospect.age < 18 || prospect.weight <50){
                ejs.renderFile("Templete/Blood Donation Eligibility.ejs",
                    {
                        name:prospect.name,
                        age:prospect.age,
                        weight:prospect.weigt
                    },
                    async(err,data)=>{
                        let messageoption ={
                            from:process.env.EMAIL,
                    to:prospect.email,
                    subject:"Don Du Sag , Merci Beaucoup",
                    html:data
                        };

                        try {await prospect.findByIdAndDelete(prospect._id);
                            
                        } catch (err) {
                            console.log(error)
                           
                        }
                    }
                );
            }
        }
    }
}
    



             
    module.exports={sendEligibilityEmail};