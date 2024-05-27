import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { checkCurrentUser, getCurrentUser } from './authSlice'
import { useEffect } from 'react';
import { AppDispatch } from '../store';

export default function ProtectedRoute() {
    //use useSelector check for the user
    const dispatch = useDispatch<AppDispatch>();
    const currentUser = useSelector(getCurrentUser);
  
    useEffect(() => {
      dispatch(checkCurrentUser());
      console.log(currentUser);
    }, [dispatch, currentUser]);

 
    
    //if user object is empty redirect the user to login page
    // else allow the user into the app
    if(currentUser){
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }
  
}
