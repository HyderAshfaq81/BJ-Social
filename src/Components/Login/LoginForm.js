import React, { Fragment, useState, useEffect, useRef } from "react"; // eslint-disable-next-line
import { useNavigate } from "react-router-dom";
import signinImage from "../../assets/signin_image.jpeg";
import google from "../../assets/google.svg";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/Authentication";
import MBALogo from '../../assets/MBALogo.png';


const LoginForm = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("user[email]", email);
    formdata.append("user[password]", password);
  try {
    const response = await dispatch(userLogin(formdata));

    console.log('=====================', response.error);

    if (response.error) {
      formRef.current.reset();
    } else {
      formRef.current.reset();
      navigate('/home');
    }
  } catch (error) {
    console.error('Error occurred during login:', error);
  }
  };
  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="hidden lg:flex lg:col-span-4">
        <img
          src={signinImage}
          alt="signinImage"
          className="h-full object-cover"
        />
      </div>
      <div className="mx-5 md:ml-[30%] pt-[30%] col-span-12 lg:col-span-6 h-full md:w-full w-[90%]">
        <a href="/home" className="md:flex hover:text-[#FF7294] text-white mb-5">
          <img src={MBALogo} alt="logo" width={100} height={100} className=""/>
        </a>
        <div className="mt-[5%] w-full md:w-[450px]">
          <div className="flex pb-3 w-full">
            <h1 className="font-[500px] text-4xl w-fit">Sign In</h1>
            <div className="border-black border-b-[1px] w-[20%]"></div>
          </div>
          <div className="text-base mb-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#1075d3] hover:underline">
              {" "}
              Sign Up{" "}
            </a>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4 relative w-full">
              <input
                className="tracking-[0.01em] w-full text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                type="email"
                name="email"
                placeholder="Enter your registered email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="absolute top-3 right-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-4 relative w-full">
              <input
                className="tracking-[0.01em] w-full text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                type="password"
                name="email"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute top-3 right-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
            </div>
            <button className="cursor-pointer bg-[#FFC0CA] w-full h-[50px] flex justify-center items-center rounded-[8px] text-white text-[18px] font-bold border-[0.2px] border-black/50 mb-4">
              SIGN IN
            </button>
          </form>
          <div className="flex items-center justify-center my-4 w-full">
            <button className="flex w-full text-center items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <img src={google} alt="google" className="w-6 h-6"/>
                <span>Continue with Google</span>
            </button>
          </div>
          <div className="flex justify-between w-full text-[12px]">
            <div className="font-[8px] flex">
              <input type="checkbox" />
              <div className="ml-2">Remember</div>
            </div>
            <div className="font-[8px]">
              <a
                href="/forget_password"
                className="text-[#1075d3] hover:underline"
              >
                {" "}
                Lost Password{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
