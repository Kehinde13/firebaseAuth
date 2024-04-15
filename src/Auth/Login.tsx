import { FaRegUserCircle } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import background from "../Images/background-auth.jpg"
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full sm:flex">
      <div className="md:w-[30%] w-[80%] my-10 mx-auto sm:my-24">
        <h1 className="text-3xl font-bold text-center my-5">Welcome Back</h1>
        <form action="" className="flex flex-col gap-5">
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <FaRegUserCircle className="border-r pr-2 text-2xl" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Username or email"
              className="outline-none w-full"
            />
          </div>
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <MdKey className="border-r pr-2 text-2xl" />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              className="outline-none w-full"
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
          <button className="bg-blue-600 rounded-md flex px-8 py-3 text-white w-full justify-around">
            <FaFacebookSquare className="self-center" />
            LOGIN WITH FACEBOOK
          </button>
          <button className="bg-red-600 rounded-md flex px-8 py-3 text-white w-full justify-around">
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
