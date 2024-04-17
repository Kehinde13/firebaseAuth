import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Auth/Login"
import AuthLayout from "./Auth/AuthLayout"
import SignUp from "./Auth/SignUp"
import ForgotPassword from "./Auth/ForgotPassword"
import Homepage from "./Homepage"
import { ToastContainer } from "react-toastify"


function App() {

 const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        index: true
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />
      }
    ]
  }, 
  {  
    path: "homepage",
    element: <Homepage />   
  }
 ])

  return (
    <>
      <RouterProvider router={router}  />
       <ToastContainer />
    </>
  )
}

export default App
