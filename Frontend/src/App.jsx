import{Outlet, RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Prospects from "./pages/Prospects";
import Menu from "./components/Menu";
import Newdonor from "./pages/Newdonor";
import Donor from "./pages/Donor";
import Prospect from "./pages/Prospect";

function App() {

  const Layout =() =>{

return(
  <div className="flex" >
    <div >
       <Menu/>
    </div>
    <div >
      <Outlet/>
    </div>
  </div>
)
  }
   const router = createBrowserRouter([
    {
      path:"/",
      element :<Home/>
    },
    {
      path:"/Login",
      element :<Login/>
    },
    {
      path:"/Admin",
      element:<Layout/>,
      children:[
        {
        path:"/Admin",
        element:<Admin/>,
      },
      {
        path:"/Admin/Donors",
        element:<Donors/>,
      },
      {
        path:"/Admin/Prospects",
        element:<Prospects/>,
      },
      {
        path:"/Admin/Newdonor",
        element:<Newdonor/>,
      },
      {
        path:"/Admin/Donor/:id",
        element:<Donor/>,
      },
      {
        path:"/Admin/Prospect/:id",
        element:<Prospect/>,
      },
    ],
    
    },
   ])
 
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
