const ejs =require("ejs");
const dotenv=require("dotenv");
const prospect =require("../models/prospect");
const sendMail=require("../helpers/sendmail")

dotenv.config();

const sendDetailsProspectEmail= async()=>{
    const prospects = await prospect.find({status:0});
    if(prospect.length >0){
        for(let prospect of prospects){
            ejs.renderFile("Templete/Confirmationdedondusang.ejs"),
            {name:prospect.name},
            async(err,data)=>{
                let messageoption ={
                    from:process.env.EMAIL,
                    to:prospect.email,
                    subject:"Don Du Sag , Merci Beaucoup",
                };
                try{
                    sendMail(messageoption);
                    await prospect.findByIdAndUpdate(prospect._id,{$set:{status:1}});

                }catch(err){
                    console.log(error)
                }
            }
        }
    }
};


module.exports={sendDetailsProspectEmail};