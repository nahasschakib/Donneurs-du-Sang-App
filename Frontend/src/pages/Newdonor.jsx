
function Newdonor  () {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="m-[20px] p-[10px] h=[80vh] w-[450px]">

        <h2 className="font-semibold">Nouveau Doneur</h2>
        <div className="flex flex-col my-[12px]">

          <label htmlFor="">Nom</label>
          <input type="text" placeholder="James Doe"
           className="border-[#555] border-2 border-solid p-[10px] w-[300px]"/>

<label htmlFor="">Aresse</label>
          <input type="text" placeholder="123 ,DomnTown city "
           className="border-[#555] border-2 border-solid p-[10px] w-[300px]"/>
         
          <label htmlFor="">Email</label>
          <input type="text" placeholder="james@exemple.com"
           className="border-[#555] border-2 border-solid p-[10px] w-[300px]"/>


            <label htmlFor="" >Groupe Sanguin</label>
          <select className="text =[18px] mt-[10px]font-semibold border-[#555] border-2 border-solid w-[300px] p-[10px]">
            <option value="">Choisir Votre Groupe</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>

          </select>



        </div>

      </div>

      <div className="m-[20px] p-[20px] h=[80vh] w-[450px]">
      <div className="flex flex-col my-[12px]">

<label htmlFor="">Tel</label>
<input type="text" placeholder="(+212 10101010)"
 className="border-[#555] border-2 border-solid p-[10px] w-[300px]"/>


<label htmlFor="">Poids</label>
<input type="Number" placeholder="50 kg"
 className="border-[#555] border-2 border-solid p-[10px] w-[300px]"/>

<label htmlFor="">Date</label>
<input type="text" placeholder="2024/07/30" 
className="border-[#555] border-2 border-solid p-[10px] w-[300px]"/>

<label htmlFor="" >Souffrez-vous des Maladies</label>
<textarea type="text"
 className="text =[18px] mt-[10px] font-semibold border-[#555] border-2 border-solid w-[300px] p-[10px]" 
 placeholder="N/A"/>

 <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px] my-[10px]"> Creer</button>
 

      </div>
   
    </div>
  </div>
  )
}

export default Newdonor;
