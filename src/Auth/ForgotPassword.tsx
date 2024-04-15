import background from "../Images/background-auth.jpg";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";

function ForgotPassword() {
  return (
    <div className="w-full sm:flex">
      <div className="md:w-[30%] w-[80%] my-10 mx-auto sm:my-24">
        <h1 className="text-3xl font-bold my-5">Forgot Password</h1>
        <form action="" className="flex flex-col gap-5">
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

          <button className="bg-blue-500 sm:p-3 p-2 rounded-md text-white w-full">
            Reset Password
          </button>
        </form>
      </div>
      <div className="hidden sm:block w-[50%]">
        <img src={background} alt="" className="h-screen w-[100%]" />
      </div>
    </div>
  );
}

export default ForgotPassword;
