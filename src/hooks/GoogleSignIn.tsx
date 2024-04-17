import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Auth/Firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';

function GoogleSignIn() {

  const navigate = useNavigate();
  
  const googleAuth = async () => {
    try {
      await signInWithPopup(auth, provider)
      
      toast.success("User have been Signed in");
      navigate("/homepage"); 
    } catch (error: unknown) {
      if(error instanceof FirebaseError){
        toast.error(error.message);
      }
    }
  };
  return {
    googleAuth
  }
}

export default GoogleSignIn