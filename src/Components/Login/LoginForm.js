import React, { Fragment, useState, useEffect, useRef } from "react"; // eslint-disable-next-line
import { useNavigate } from "react-router-dom";
import signinImage from "../../assets/signin_image.jpeg";
import { toast } from "react-toastify";


const LoginForm = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1MWJiNGJkMWQwYzYxNDc2ZWIxYjcwYzNhNDdjMzE2ZDVmODkzMmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2x0LTM2MDMxNCIsImF1ZCI6ImNsdC0zNjAzMTQiLCJhdXRoX3RpbWUiOjE2ODc5NjMwMzYsInVzZXJfaWQiOiJsRjZYd2RRQlNOUEJnNVBqdjZFOXE1YThrT1EyIiwic3ViIjoibEY2WHdkUUJTTlBCZzVQanY2RTlxNWE4a09RMiIsImlhdCI6MTY4ODQyNjk0NSwiZXhwIjoxNjg4NDMwNTQ1LCJlbWFpbCI6Imhpa2VxeUBzb2NhbS5tZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfbnVtYmVyIjoiKzQ2NzI2NDEyNTU0IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrNDY3MjY0MTI1NTQiXSwiZW1haWwiOlsiaGlrZXF5QHNvY2FtLm1lIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.SX7denTXQ6VEt4AjcI9kNAeKoKseHijaIQopgeAaZm-FF1H3iZGeVgDvuYV4CoIIAFgM8adC24ZxDwkEEBLl-vCy9mW4GIXeQV89bDSn_FiCfhmKvmgLsOYfv5CXliSjG_s674zae-Hao5gdxNteuKNPKMghkmpu-gtBgTZUIYomi4tZN39XjL990eQkMyKoA0NH9J_ZnD5MGlAjiVz5XBqe1o_Oe6EqY11G7xhgfpzsbcgTnPY6-ZRAujwKCNFYu6dtrqFixqSdgdwnTMlQygmZAhWpZl69pxL-9iWMZfK77pPWn7dD0NfumVWI1pAxKrI0gTMNktN3jJsPaq_W4w"
    );

    var formdata = new FormData();
    formdata.append("user[email]", email);
    formdata.append("user[password]", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(`http://127.0.0.1:3000/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status.code >= 200 && result.status.code < 400) {
          // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkN2M0YzU0My1iNGUzLTRlZjctYjQ3MC00MDY1ZTUxNDdkMjQiLCJzdWIiOiI1Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjkwMDcwMzg0LCJleHAiOjE2OTAwNzIxODR9.uKgK4rkQlSFNGEpMTUOIOOIrDbo7Tp53l0Xl-aXB2wU')
          toast.success(result.status.message)
          navigate('/home')
        } else {
          toast.error(result.status.message)
        }
      })
      .catch((error) => toast.error('error while sign in '));
  };
  return (
    <div className="min-h-screen grid grid-cols-12">
      <div className="col-span-4">
        <img
          src={signinImage}
          alt="signinImage"
          className="h-full object-cover"
        />
      </div>
      <div className="col-span-6 h-full w-full">
        <a href="/" className="mt-[20%] ml-[35%] flex relative">
          <a href="/">
            <img
              src="https://logowik.com/content/uploads/images/sexy-woman1909.logowik.com.webp"
              className="w-[100px] h-[80px]"
              alt= "login"
            />
          </a>
          <div className="font-bold text-2xl flex items-center absolute top-4 -left-7">
            <div className="mr-7">MEET</div>
            <div>DATE</div>
          </div>
        </a>
        <div className="mt-[10%] ml-[30%] w-[450px]">
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
