import { Link } from "react-scroll";


function NavBar() {
  return (
    <div className="flex items-center justify-between h-[100px] px-[200px]">
        <img src="/Logo (1).png" alt=""   height={200} width ={200} className="cursor-pointer" />

        <div className="div">
            <Link to=" hero"smooth={true} duration={1000} className="mr-3 text-[18px] font-medium cursor-pointer">Acceuil</Link> 
            <Link to="featured"smooth={true} duration={1000} className="mr-3 text-[18px] font-medium cursor-pointer">A propos</Link>
            <Link to ="contactez-nous"smooth={true} duration={1000} className="mr-3 text-[18px] font-medium cursor-pointer">Contactez-nous</Link> 
            
        </div>

    </div>
  )
}

export default NavBar