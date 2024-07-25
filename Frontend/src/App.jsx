import{Outlet, RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Prospects from "./pages/Prospects";
import Menu from "./components/Menu";

function App() {

  const Layout =() =>{

return(
  <div className="flex" >
    <div className="div">
   <Menu/>
    </div>
    <div className="div">
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
