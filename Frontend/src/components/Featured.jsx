
function Featured() {
  return (
    <div className="flex px-[200px] mt-[100px]" >
        <div className="bg-gray-200 h-[400px] w-[500px] z-10 mt-[10px]">
            <div className="m-10">
            <h1 className="text-[25px] font-semibold">Qui Sommes-nous ?</h1>
            <hr className="bg-red-500 w-[150px] h-[3px] my-[20px]"/>
            <span>E-Sang.Don est un centre de don public avec des membres donneurs se sang dans un systeme de sante en evolution.</span>

            <ul>
                <li className="mt-3 text-[14px]" >1.Donneurs de Sang specialies et supervision clinique</li>
                <li className="mt-3 text-[14px]">2.Amelioration de la communication entre les Membres</li>
                <li className="mt-3 text-[14px]" >3.Evaluation , Dignostic et traitement de haute qualite</li>
                <li className="mt-3 text-[14px]">4.Examiner de maniere critique pour assurer l'alignement</li>
                <li className="mt-3 text-[14px]">5.Soins supplementaires d'une equipe Multi-disciplinaires</li>
            </ul>
            </div>
        </div>
        

        <div className="h-[450px] w-[500px] ml-[-30px]">

            <video src="/video.mp4 " height="450px" width="500px" loop muted autoPlay></video>

         </div>   
        
      
    </div>
  )
}

export default Featured
