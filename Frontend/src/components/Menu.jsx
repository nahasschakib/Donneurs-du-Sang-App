
import { useState } from "react";
import { Link } from "react-router-dom";
 
import{
  FaBox,
  FaCalendar,
  FaCalendarAlt,
  FaChartBar,
  FaClipboard,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaUser,
  FaUsers,
  
} from "react-icons/fa";

const Menu = () => {

  const [activeLink ,setActiveLink] = useState("/Admin");

  const handleLinkActive =(Link)=>{setActiveLink(Link);
  }
  return (
    <div className="h-[135vh] bg-gray-100 p-[20px] w-[250px] shadow-lg ">
      <lu className="flex flex-col items-start justify-start mt-[20px] text-[18px]">
        <Link to="/Admin" onClick={()=>handleLinkActive("/Admin")}>
        <li className={`flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold 
          ${activeLink === "/Admin" ? "bg-red-300 p-[10px] w-[200px] text-white" : "" }
          `} > 
          <FaHome className={`mr-[15px] text-red-500 
            ${activeLink==="/Admin" ? "text-white" : ""}
            `}/>
          Acceuil
        </li>
        </Link>
        <li className="flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold">
          <FaUser className="mr-[15px] text-red-500 " />
          Profile
        </li>
        <hr className="w-full my-[20px] border-gray-300"/>

        <Link to="/Admin/Donors" onClick={()=>handleLinkActive("/Admin/Donors")}>
        <li className={`flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold 
          ${activeLink === "/Admin/Donors" ? "bg-red-300 p-[10px] w-[200px] text-white" : "" }
          `} > 
          <FaBox className={`mr-[15px] text-red-500 
            ${activeLink==="/Admin/Donors" ? "text-white" : ""}
            `}/>
          Donateurs
        </li>
        </Link>

        <Link to="/Admin/Prospects" onClick={()=>handleLinkActive("/Admin/Prospects")}>
        <li className={`flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold 
          ${activeLink === "/Admin/Prospects" ? "bg-red-300 p-[10px] w-[200px] text-white" : "" }
          `} > 
          <FaUsers className={`mr-[15px] text-red-500 
            ${activeLink==="/Admin/Prospects" ? "text-white" : ""}
            `}/>
       Prospects
        </li>
        </Link>
        <li className="flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold">
          <FaCalendar className="mr-[15px] text-red-500 " />
       Commandes
        </li>

        <hr className="w-full my-[20px] border-gray-300"/>

        <li className="flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold">
          <FaElementor className="mr-[15px] text-red-500 " />
       Elements
        </li>
        <li className="flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold">
          <FaCog className="mr-[15px] text-red-500 " />
       Parametres
        </li>
        <li className="flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold">
          <FaHdd className="mr-[15px] text-red-500 " />
       Sauvegardes
        </li>
        <hr className="w-full my-[20px] border-gray-300"/>

        <li className="flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold">
          <FaChartBar className="mr-[15px] text-red-500 " />
       Charts
        </li>
        <li className="flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold">
          <FaClipboard className="mr-[15px] text-red-500 " />
       All logs
        </li>
        <li className="flex items-center text-[18px] cursor-pointer  mt-[20px] transition-colors duration-100 font-semibold">
          <FaCalendarAlt className="mr-[15px] text-red-500 " />
       Agenda
        </li>
 
      </lu>
        
    </div>
  )
}
        
export default Menu