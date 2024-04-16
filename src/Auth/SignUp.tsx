import { FaRegUserCircle } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import background from "../Images/background-auth.jpg"
import { useState } from "react";
import { toast } from "react-toastify";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleSignIn from "../hooks/GoogleSignIn";

interface FormState {
  firstName: string;
  lastName: string;
  Email: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
 const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    Email: "",
    password: "",
    confirmPassword: "",
 })

 const {googleAuth} = GoogleSignIn()

 const Navigate = useNavigate()

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (Object.values(form).some((field) => field === "")) {
    toast.error("All fields are required");
    return;
  }

  if (form.password !== form.confirmPassword) {
    toast.error("Your passwords do not match");
    return;
  }

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      form.Email,
      form.password
    );
    const docRef = doc(db, "users", user.uid);

    const userDoc = await getDoc(docRef);

    if (!userDoc.exists()) {
      await setDoc(docRef, {
        userId: user.uid,
        username: form.firstName,
        email: form.Email,
        userImg: "",
        bio: "",
      });
      toast.success("Sign Up Successful");
      Navigate("/homepage");
    }
  } catch (error) {
    toast.error((error as Error).message);
  }
};


  return (
    <div className="w-full sm:flex">
      <div className="md:w-[30%] w-[80%] my-2 mx-auto sm:my-10">
      <h1 className="text-3xl font-bold my-5">Register</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <FaRegUserCircle className="border-r pr-2 text-2xl" />
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <FaRegUserCircle className="border-r pr-2 text-2xl" />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <CiMail className="border-r pr-2 text-2xl" />
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Email"
              className="outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <MdKey className="border-r pr-2 text-2xl" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="outline-none w-full"
              onChange={handleChange}
            />
          </div>
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <MdKey className="border-r pr-2 text-2xl" />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="outline-none w-full"
              onChange={handleChange}
            />
          </div>

          <button className="bg-blue-500 sm:p-3 p-2 rounded-md text-white w-full">
            SIGN UP
          </button>
        </form>
        <div className="flex gap-5 my-5">
          <hr className="w-full self-center" /> Or{" "}
          <hr className="w-full self-center" />
        </div>
        <div className="flex flex-col gap-5">
          <button 
          onClick={googleAuth}
          className="bg-red-600 rounded-md flex px-8 py-3 text-white w-full justify-around">
            <FaGoogle className="self-center" />
            SIGN UP WITH GOOGLE
          </button>
        </div>
      </div>
      <div className="hidden sm:block w-[50%] h-screen">
        <img src={background} alt="" className="h-screen w-[100%]"/>
      </div>
    </div>
  )
}

export default SignUp