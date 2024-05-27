import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getCurrentUser } from './authSlice'

function AuthLayout() {
  const currentUser = useSelector(getCurrentUser)

  if(currentUser){
    return <Navigate to="/homePage" replace />;
  }
  return (
    <Outlet />
  )
}

export default AuthLayout