import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import {FaTrash} from "react-icons/fa";
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';


const Prospects = () => {
  const [prospects,setProspects] = useState([])
  const columns =[
    {field:"_id",headerName:"ID",width:90},
    {field:"name",headerName:"Nom",width:150},
    {field:"Adresse",headerName:"Adresse",width:150},
    {field:"Bloodgroup",headerName:"Groupe Sang.",width:130},
    {field:"Diseases",headerName:"Maladies",width:150},
      {field:"edit",
        headerName:"Editer",
        with:150,
        renderCell:(params)=>{
          return(
            <>
            <Link to={`/Admin/Prospect/${params.row._id}`}>
            <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
              Confirmer
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
            <Link to={`/Prospect/123`}/>
            <FaTrash className="text-red-600 cursor-pointer w-[70px]" onClick={()=> handleDelete(params.rows._id)}>
             Supprimer
              </FaTrash> 
            </>
          )
        }
      }
  ]

  useEffect(()=>{

    const getProspects = async ()=>{
      try {
        const res = await publicRequest.get("/Prospects");
        setProspects(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProspects()
},[]);
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
        Tous les Prospects
        </h1>
        <Link to ="">
        <button className="">
         </button>
        </Link>
       
      </div>

      <div>

      <DataGrid rows={prospects} 
       getRowId={(row)=>row._id}
        checkboxSelection columns={columns} />

      </div>

    </div>
  )
}

export default Prospects





