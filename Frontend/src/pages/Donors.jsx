import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import {FaTrash} from "react-icons/fa";
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';



const Donors = () => {
  const [Donors,setDonors] = useState([])

  const columns =[
    {field:"_id",headerName:"ID",width:90},
    {field:"name",headerName:"Nom",width:150},
    {field:"Adresse",headerName:"Adresse",width:150},
    {field:"Bloodgroup",headerName:"Groupe Sang.",width:130},
    {field:"Diseases",headerName:"Maladies",width:150},
      {field:"edit",
        headerName:"Editer",
        with:150,
        renderCell:()=>{
          return(
            <>
            <Link to={`/Admin/Donor/123`}>
            <button className="bg-green-600 text-white cursor-pointer w-[70px] ">
              Editer
            </button>
            </Link>   
            </>
          )
        }
      },
      {field:"delete",
        headerName:"Supprimer",
        with:150,
        renderCell:(params)=>{
          return(
            <>
            <Link to={`/Admin/Donor/123`}>
            <FaTrash className="text-red-600 cursor-pointer w-[70px] mt-4" onClick={()=> handleDelete(params.rows._id)} >
             Supprimer
              </FaTrash> 
             </Link> 
             
            </>
          )
        }
      }
  ] 

  

  useEffect(()=>{

      const getDonors = async ()=>{
        try {
          const res = await publicRequest.get("/Donors");
          setDonors(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      getDonors()
  },[])

 const handleDelete=async(id)=>{
  try {
    await publicRequest.delete(`/donors/${id}`);
    window.location.reload();
  } catch (error) {
    console.log(error)
  }
 }

   return (
    <div className="w-[75vw]">
      <div className="flex items-center justify-between m-[30px]">

        <h1 className="m-[20x] text-[20px] font-semibold">
          Tous les Donateur
        </h1>
        <Link to ="/Admin/Newdonor">
        <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold">
          Nouveau Donateur
        </button>
        </Link>
      </div>

      <div>

        <DataGrid rows={Donors} 
       getRowId={(row)=>row._id}
        checkboxSelection columns={columns} />

      </div>

    </div>
  )
}

export default Donors