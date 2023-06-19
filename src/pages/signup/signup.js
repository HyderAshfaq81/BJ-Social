import React from "react";
import signupImg from "../../assets/signupImg.jpeg";

const Signup = () => {
  return (
    <div className="mt-10 w-full min-h-screen">
      <div className="flex justify-center my-4">
        <a href="/" className="flex relative">
          <a href="/">
            <img
              src="https://logowik.com/content/uploads/images/sexy-woman1909.logowik.com.webp"
              className="w-[100px] h-[80px]"
            />
          </a>
          <div className="font-bold text-2xl flex items-center absolute top-4 -left-7">
            <div className="mr-7">MEET</div>
            <div>DATE</div>
          </div>
        </a>
      </div>
      <div className="bg-grey2 w-full min-h-screen pt-10">
        <div className="lg:w-[1280px] m-auto p-10 flex border-[0.1px] border-grey1/30 rounded-[8px]">
          <div className="w-[30%] relative">
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
          <div className="w-[70%]">
            <div className="text-[28px] font-bold mb-4">Create a new profile</div>
            <div className="">
              <div className="flex w-full">
                <div className="mb-4 w-1/2">
                  <label className="ml-2 text-base text-black/70">First Name</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="first_name"
                    placeholder="Enter your First Name"
                    required
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="ml-2 text-base text-black/70">Last Name</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="last_name"
                    placeholder="Enter your Last Name"
                    required
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="mb-4 w-1/2">
                  <label className="ml-2 text-base text-black/70">Email Address</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="first_name"
                    placeholder="Enter your Email Address"
                    required
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="ml-2 text-base text-black/70">Password</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="last_name"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="mb-4 w-1/2">
                  <label className="ml-2 text-base text-black/70">Home Address</label>
                  <input
                    className="mt-2 tracking-[0.01em] w-[98%] text-black/50 box-border border-2 border-[#93AAC5] rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-white/50"
                    type="text"
                    name="first_name"
                    placeholder="Enter your Home Address"
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
export default Signup;
