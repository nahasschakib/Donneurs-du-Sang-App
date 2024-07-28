


const ContactUs = () => {
  return (
    <div className="flex items-center justify-center my-[100px]">
    <div className="flex flex-col bg-gray-100 w-[50%] h-auto p-[50px]">
        <span className="text-[20px] my-[20px]">Vous voulez donner de Sang?. Remplir les Informations</span>
        <label htmlFor="text =[18px] mt-[10px]" className="font-semibold" >Nom et Prenom</label>
        <input type="text" className="w-[350px] p-[15px]" placeholder="John Doe"/>
        <label htmlFor="text =[18px] mt-[10px]" className="font-semibold" required>Email</label>
        <input type="Email" className="w-[350px] p-[15px]" placeholder="John@exemple.com"/>
        <label htmlFor="text =[18px] mt-[10px]" className="font-semibold" >Telephone</label>
        <input type="Number" className="w-[350px] p-[15px]" placeholder="+21210101010"/>
        <label htmlFor="text =[18px] mt-[10px]" className="font-semibold" >Adresse</label>
        <input type="text" className="w-[350px] p-[15px]" placeholder="123 ,boulevard ville"/>
        <label htmlFor="Number =[18px] mt-[10px]" className="font-semibold" >Poids</label>
        <input type="text" className="w-[350px] p-[15px]" placeholder="50 KG"/>
        <label htmlFor="text =[18px] mt-[10px]" className="font-semibold" >Age</label>
        <input type="Number" className="w-[350px] p-[15px]" placeholder="20"/>
        <label htmlFor="text =[18px] mt-[10px]" className="font-semibold" >Groupe Sanguin</label>
          <select className="w-[350px] p-[15px]">
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
        <label htmlFor="text =[18px] mt-[10px]" className="font-semibold" >Souffrez-vous desMaladies</label>
        <textarea type="text" className="w-[350px] p-[15px]" placeholder="N/A"/>

        <button className="bg-red-500 p-3 mt-3 w-[350px] cursor-pointer text-white " >Soumettre</button>

    </div>

</div>
  )
}

export default ContactUs

