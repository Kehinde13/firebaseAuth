import { Outlet } from 'react-router-dom'

function AuthLayout() {
  //use useSelector check ofr the user
  //if user object is empty redirect the user to login page
  // else allow the user into the app
  return (
    <Outlet />
  )
}

export default AuthLayout