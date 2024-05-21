import { deleteUser, getAuth, signOut } from "firebase/auth";
import profileImg from "./Images/profile.jpg";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const deleteAcc = () => {
    if (user) {
      deleteUser(user)
        .then(() => {
          navigate("/");
          toast.error("User Deleted");
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      toast.success("User has been logged out");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  useEffect(() => {
    if (user) {
      console.log(user);
    } else {
      alert("No user is signed in.");
    }
  }, [user]);

  return (
    <div>
      <div className="w-[300px] mx-auto mt-20">
        <img
          src={user?.photoURL ? user?.photoURL : profileImg}
          alt=""
          className="w-[50%] rounded-full mx-auto "
        />
        <h1 className="text-center text-3xl font-bold my-5">
          {user?.displayName}
        </h1>
        <div className="w-[80%] mx-auto flex gap-5">
          <button
            onClick={logout}
            className="bg-red-300 px-3 py-1 rounded-md text-white"
          >
            Sign Out
          </button>
          <button
            onClick={deleteAcc}
            className="bg-red-600 px-3 py-1 rounded-md text-white"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
