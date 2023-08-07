import React from "react";
import signupImg from "../../assets/signupImg.jpeg";
import MBALogo from '../../assets/MBALogo.png';

const ForgetPassword = () => {
  return (
    <div className="mt-10 w-full min-h-screen">
      <div className="flex justify-center my-4">
        <a href="/home" className="flex hover:text-[#FF7294] text-white mb-5">
          <img src={MBALogo} alt="logo" width={100} height={100} className=""/>
        </a>
      </div>
      <div className="bg-grey2 w-full min-h-screen pt-10">
        <div className="w-[95%] xl:w-[1200px] m-auto p-10 flex border-[0.1px] border-grey1/30 rounded-[8px]">
          <div className="md:flex hidden w-[30%] relative">
            <img
              src={signupImg} alt="signupImg"
              className="h-[450px] "
            />
            <div className="absolute bottom-0 bg-white w-[75%] h-[80px] m-4 rounded-[8px]">
              <div className="font-bold flex ml-2 mt-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </div>
                <div> Quick Tip </div>
              </div>
              <div className="ml-2 mt-2">Already a member? <a href="/login" className="text-[#1075d3] hover:underline"> Sign In   </a></div>
            </div>
          </div>
          <div className="w-full md:w-[70%] flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="text-[28px] font-bold">Password Reset</div>
              <div className="text-[16px] text-black/50 mb-4">Enter your account username or email address below.</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex w-full justify-center items-center">
                <div className="mb-4 w-full">
                  <label className="ml-2 text-base text-black/70">username or email</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="first_name"
                    placeholder="My Account user Name is ......"
                    required
                  />
                </div>
              </div>
              <div className="cursor-pointer bg-[#FFC0CA] w-full h-[50px] flex justify-center items-center rounded-[8px] text-white text-[18px] font-bold border-[0.2px] border-black/50 mt-4">
                SUBMIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ForgetPassword;
