import React from 'react';
import signupImg from "../../assets/signupImg.jpeg";

const ChangePassword = () => {
  return (
    <div className="mt-10 w-full min-h-screen">
      <div className="w-full min-h-screen pt-10">
        <div className="w-full m-auto p-10 flex border-[0.1px] rounded-[8px]">
          <div className="w-[100%] flex flex-col justify-center items-center">
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

export default ChangePassword
