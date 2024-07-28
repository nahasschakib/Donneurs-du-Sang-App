import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import {FaTrash} from "react-icons/fa";


const Donors = () => {

  const columns =[
    {field:"id",headerName:"ID",width:90},
    {field:"name",headerName:"Nom",width:150},
    {field:"Adresse",headerName:"Adresse",width:150},
    {field:"BloodType",headerName:"Groupe Sang.",width:130},
    {field:"diseases",headerName:"Maladies",width:150},
      {field:"edit",
        headerName:"Editer",
        with:150,
        renderCell:()=>{
          return(
            <>
            <Link to={`/Admin/123`}/>
            <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
              Editer
              </button> 
            </>
          )
        }
      },
      {field:"delete",
        headerName:"Supprimer",
        with:150,
        renderCell:()=>{
          return(
            <>
            <Link to={`/Admin/123`}/>
            <FaTrash className="text-red-600 cursor-pointer w-[70px]">
             Supprimer
              </FaTrash> 
            </>
          )
        }
      }
  ]


  const rows =[
    {id: "1",
      name: "John Doe",
      Adresse:"123 ,Bd Zerktouni casablanca",
      BloodType:" O+",
      diseases:"Cardiaque",
    },
    {id: "2",
      name: "Mohammed Zaid",
      Adresse:"408,Bd Zerktouni casablanca",
      BloodType:" A-",
      diseases:"Strees",
    },
    {id: "3",
      name: "John Doe",
      Adresse:"123 ,Bd Zerktouni casablanca",
      BloodType:" O+",
      diseases:"Cardiaque",
    },
    {id: "4",
      name: "Chahid Radouane",
      Adresse:"123 ,Bd Zerktouni casablanca",
      BloodType:" O+",
      diseases:"Alinma",
    }
    ,  {id: "5",
      name: "Taha NAHASS",
      Adresse:"25 hay Dakhla casablanca",
      BloodType:" O-",
      diseases:"N/A",
    },
    {id: "6",
      name: "David Cohn",
      Adresse:"424 ,HassanIIcasablanca",
      BloodType:" O+",
      diseases:"Dabete",
    },
    {id: "7",
      name: "Phils Moore",
      Adresse:"123 ,Bd Zerktouni Marrakech",
      BloodType:" AB-",
      diseases:"Ascme",
    }
  ]
  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">

        <h1 className="m-[20x] text-[20px] font-semibold">
          Tous les Donateur
        </h1>

        <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold">
          Nouveau Donateur
        </button>
      </div>

      <div>

        <DataGrid rows={rows} checkboxSelection columns={columns} />

      </div>

    </div>
  )
}

export default Donors