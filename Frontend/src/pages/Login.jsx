

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">

        <img src="/Hero1.jpg" alt="Login"
        className="object-cover h-full w-full"/>

      </div>

      <div className="p-10 w-[500px]">
        <h2 className="text-2xl font-bold text-gray-600 mb-5">Login</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor ="" className="block text-gray-600 mb-1" >Email</label>
            <input type="text"
            id="email"
            className="w-full px-4  py-2 border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="John@exemple.com"      
            />
            </div>
            <div>
            <label htmlFor ="" className="block text-gray-600 mb-1" >Password</label>
            <input type="Password"
            id="password"
            className="w-full px-4  py-2 border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="**********"      
            />
            </div>
            <button type="submit"
            className="w-full py-2 bg-red-500 text-white font-bold rounded-md transition-transform duration-700
            hover:bg-red-600 focus:outline-none focus:ring-2 focus: ring-red-600 transform hover:scale-105"
            >LOGIN</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login
