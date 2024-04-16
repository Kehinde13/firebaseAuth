import { FaRegUserCircle } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import background from "../Images/background-auth.jpg"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "./Firebase";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import GoogleSignIn from "../hooks/GoogleSignIn";

interface formData {
  username: string,
  password: string
}

function Login() {
  const navigate = useNavigate()
  const {googleAuth} = GoogleSignIn()
  const [form, setForm] = useState<formData>({
    username: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form["username"] === "" || form["password"] === "") {
      toast.error("Input email and password");
    }

    try {
      await signInWithEmailAndPassword(auth, form.username, form.password);
      navigate("/homepage");
      toast.success("User has been logged in");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      }
    }
  }


  return (
    <div className="w-full sm:flex">
      <div className="md:w-[30%] w-[80%] my-10 mx-auto sm:my-24">
        <h1 className="text-3xl font-bold text-center my-5">Welcome Back</h1>
        <form action="" onSubmit={handleSignIn} className="flex flex-col gap-5">
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <FaRegUserCircle className="border-r pr-2 text-2xl" />
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Username or email"
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

          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="checkbox" name="rememberMe" id="" />
              <label htmlFor="rememberMe" className="self-center">
                Remember me
              </label>
            </div>
            <button className="bg-blue-500 sm:px-3 sm:py-2 px-2 py-1 rounded-md text-white">
              LOGIN
            </button>
          </div>
        </form>
        <div className="flex justify-between my-5">
          <Link to="/signup" className="text-blue-500">Register now</Link>
          <Link to="/forgotpassword" className="text-red-500">Forgot Password ?</Link>
        </div>
        <div className="flex gap-5 my-5">
          <hr className="w-full self-center" /> Or{" "}
          <hr className="w-full self-center" />
        </div>
        <div className="flex flex-col gap-5">
          <button className="bg-red-600 rounded-md flex px-8 py-3 text-white w-full justify-around"
                  onClick={googleAuth}
          >
            <FaGoogle className="self-center" />
            LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
      <div className="hidden sm:block w-[50%]">
        <img src={background} alt="" className="h-screen w-[100%]"/>
      </div>
    </div>
  );
}

export default Login;
