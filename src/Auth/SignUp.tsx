import { FaRegUserCircle } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import background from "../Images/background-auth.jpg"

function SignUp() {
  return (
    <div className="w-full sm:flex">
      <div className="md:w-[30%] w-[80%] my-2 mx-auto sm:my-10">
      <h1 className="text-3xl font-bold my-5">Register</h1>
        <form action="" className="flex flex-col gap-5">
        <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <FaRegUserCircle className="border-r pr-2 text-2xl" />
            <input
              type="text"
              name="firstName"
              id=""
              placeholder="First Name"
              className="outline-none w-full"
            />
          </div>
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <FaRegUserCircle className="border-r pr-2 text-2xl" />
            <input
              type="text"
              name="lastName"
              id=""
              placeholder="Last Name"
              className="outline-none w-full"
            />
          </div>
          <div className="border border-gray-300 p-3 flex gap-4 rounded-md">
            <CiMail className="border-r pr-2 text-2xl" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
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

          <button className="bg-blue-500 sm:p-3 p-2 rounded-md text-white w-full">
            SIGN UP
          </button>
        </form>
        <div className="flex gap-5 my-5">
          <hr className="w-full self-center" /> Or{" "}
          <hr className="w-full self-center" />
        </div>
        <div className="flex flex-col gap-5">
          <button className="bg-blue-600 rounded-md flex px-8 py-3 text-white w-full justify-around">
            <FaFacebookSquare className="self-center" />
            SIGN UP WITH FACEBOOK
          </button>
          <button className="bg-red-600 rounded-md flex px-8 py-3 text-white w-full justify-around">
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