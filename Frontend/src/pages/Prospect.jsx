

function Prospect() {
  return (
    <div className="flex items-center justify-center min-h-screen">

        <div className=" m-[20px] h-[100vh] w-[450px] shadow-xl">
            <h2 className="font-semibold m-[30px]"> Prospect</h2>
            <ul className="m-[30px]">
                <li className="m-[14px]">
                    <strong> Name :  </strong> 
                    John Doe
                </li>
                <li className="m-[14px]">
                    <strong> Adresse :  </strong> 
                    123,BD Zerktouni Casablanca
                </li>
                <li className="m-[14px]">
                    <strong> Tel :  </strong> 
                   (+212 10101010)
                </li>
                <li className="m-[14px]">
                    <strong> Type du Sang :  </strong> 
                    Inconnu
                </li>
                <li className="m-[14px]">
                    <strong> Maladies :  </strong> 
                    N/A
                </li>
                <li className="m-[14px]">
                    <strong> Poids :  </strong> 
                    50kg
                </li>
                <li className="m-[14px]">
                    <strong> Date :  </strong> 
                    30/07/2024
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