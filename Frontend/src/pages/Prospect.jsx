import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

function Prospect() {

    const[prospect,setProspect] = useState({});
  const location = useLocation();
  const prospectId=location.pathname.split("/")[3];

  useEffect (()=>{
    const getProspect =async()=>{
      try {
        const res =await publicRequest.get(`/prospects/find/${prospectId}`);
        setProspect(res.data);
         }
       catch (error) {
        console.log(error)
      }
    }
      getProspect();
     
  },[]);

  return (
    <div className="flex items-center justify-center min-h-screen">

        <div className=" m-[20px] h-[100vh] w-[450px] shadow-xl">
            <h2 className="font-semibold m-[30px]"> Prospect</h2>
            <ul className="m-[30px]">
                <li className="m-[14px]">
                    <strong> Name :  </strong> 
                   {prospect.Name}
                </li>
                <li className="m-[14px]">
                    <strong> Adresse :  </strong> 
                    {prospect.Adresse}
                </li>
                <li className="m-[14px]">
                    <strong> Tel :  </strong> 
                   {prospect.Tel}
                </li>
                <li className="m-[14px]">
                    <strong> Type du Sang :  </strong> 
                    {prospect.bloodgroup}
                </li>
                <li className="m-[14px]">
                    <strong> Maladies :  </strong> 
                {prospect.Maladies}
                </li>
                <li className="m-[14px]">
                    <strong> Poids :  </strong> 
                    {`${prospect.Poids} Kg`}
                </li>
                <li className="m-[14px]">
                    <strong> Date :  </strong> 
                   {prospect.date}
                </li>
                <li className="m-[14px]">
                    <strong> Status :  </strong> 
                    En attente
                </li>
            </ul>
         <span className="block m-[30px]">Voulez-vous confirmer la donation ?</span>
         <button className="bg-red-500 text-white cursor-pointer p-[5px] m-[10px] w-[150px]" >Confirmer</button>

        </div>
        
        
    </div>
  )
}

export default Prospect