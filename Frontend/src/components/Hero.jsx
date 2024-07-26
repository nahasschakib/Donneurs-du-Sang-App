

function Hero() {
  return (
    <div className="bg-[url('/Hero1.jpg')] bg-no-repeat bg-cover bg-center h-[80vh] px[200px]">
      <div className=" flex flex-col text-white w-[50%] pt[10%] ml-9">

        <span className="text-[30px] mt-7 ">Donner du Sang ,Sauver une vie</span>
        <h1 className="text-[38px] mt-3">
          Votre Sang peut sauver plusieurs personnes

        </h1>
        <div className=" flex items-center mt-[20px]">

          <button className="bg-gray-800 p-[10px] w-[220px] text-white cursor-pointer mr-9">Donner Maintenant</button>
          <button className="bg-gray-400 p-[10px] w-[220px] text-white cursor-pointer mr-9">Appelez (+212) 676828690</button>
        </div>

      </div>


    </div>
  )
}

export default Hero