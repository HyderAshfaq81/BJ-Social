import React from "react";
import imageGirl from "../../../assets/contactUs.jpg";

const ContactUs = () => {
  return (
    <div className="flex mt-5 md:mt-40 bg-grey2">
      <div className="md:flex hidden w-1/2 flex items-center justify-center">
        <img src={imageGirl} alt="imageGirl" className="h-[90%]" />
      </div>
      <div className="w-full md:w-1/2 flex items-center pl-4 md:pl-20">
        <div className="w-full">
          <div className="text-2xl md:text-4xl font-bold pt-5 md:pt-40">Contact Us</div>
          <div className="ml-5 mt-10">
            <div className="flex flex-col mb-5">
              <label className="text-xl font-medium mb-5">First Name</label>
              <input
                className="tracking-[0.01em] w-[95%] md:w-[80%] text-black box-border rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-cloudBurst"
                type="email"
                name="email"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                placeholder="Enter your First Name"
                required
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-xl font-medium mb-5">Last Name</label>
              <input
                className="tracking-[0.01em] w-[95%] md:w-[80%] text-black box-border rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-cloudBurst"
                type="lastName"
                name="lastName"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                placeholder="Enter your Last Name"
                required
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-xl font-medium mb-5">Phone Number</label>
              <input
                className="tracking-[0.01em] w-[95%] md:w-[80%] text-black box-border rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-cloudBurst"
                type="lastName"
                name="lastName"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                placeholder="Enter your Phone Number"
                required
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-xl font-medium mb-5">Email</label>
              <input
                className="tracking-[0.01em] w-[95%] md:w-[80%] text-black box-border rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-cloudBurst"
                type="lastName"
                name="lastName"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-xl font-medium mb-5">Location</label>
              <input
                className="tracking-[0.01em] w-[95%] md:w-[80%] text-black box-border rounded-[8px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-cloudBurst"
                type="lastName"
                name="lastName"
                // value={email}
                // onChange={e => setEmail(e.target.value)}
                placeholder="Enter your Location"
                required
              />
            </div>
          </div>
          <div className="md:m-0 m-auto mb-4 md:mb-0 bg-[#FF7294] text-white w-[200px] h-[40px] md:h-[60px] rounded-full flex justify-center items-center font-bold text-xl cursor-pointer">Submit</div>
        </div>
      </div>
    </div>
  )
} 
export default ContactUs;
