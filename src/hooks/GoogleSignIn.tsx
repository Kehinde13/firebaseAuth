import { signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from '../Auth/Firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';
import { doc, getDoc, setDoc } from 'firebase/firestore';

function GoogleSignIn() {

  const navigate = useNavigate();
  
  const googleAuth = async () => {
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