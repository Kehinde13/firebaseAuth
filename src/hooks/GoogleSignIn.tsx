import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react'
import { auth, db, provider } from '../Auth/Firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';

function GoogleSignIn() {
    const [googleLoading, setGoogleLoading] = useState<boolean>(false)

  const navigate = useNavigate();
  
  const googleAuth = async () => {
    setGoogleLoading(true)
    try {
      const createUser = await signInWithPopup(auth, provider);
      const newUser = createUser.user;
      
      const docRef = doc(db, "users", newUser.uid);
      
      const userDoc = await getDoc(docRef); 
    
      
      if (!userDoc.exists()) {
        await setDoc(docRef, {
          userId: newUser.uid,
          username: newUser.displayName,
          email: newUser.email,
          userImg: newUser.photoURL,
          bio: "",
        });
      }
      setGoogleLoading(false)
      toast.success("User have been Signed in");
      navigate("/homepage"); 
    } catch (error: unknown) {
      if(error instanceof FirebaseError){
        toast.error(error.message);
      }
      setGoogleLoading(false)
    }
  };
  return {
    googleAuth,
    googleLoading
  }
}

export default GoogleSignIn