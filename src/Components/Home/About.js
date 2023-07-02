import React from "react";
import Image from "../../assets/signupImg.jpeg";

const About = () => {
  return (
    <div className="bg-grey2 px-[100px] pt-40 flex">
      <div className="w-[40%]">
        <img src={Image} alt="images" className=" w-full h-[600px] rounded-[8px] "/>
      </div>
      <div className="w-[60%] ml-20 flex flex-col justify-center">
        <div className="font-bold text-4xl mt-40">About Us</div>
        <div className="text-3xl leading-5 mt-10">The love method</div>
        <div className="text-xl leading-7 mt-10">
          Are you looking for the ways to grow your business? If so? you may want to consider hiring a development company t help ypu out. At NETMARK, we provide full-cycle software development services to help business grow.
        </div>
        <div className="mt-5 text-grey1 cursor-pointer w-[200px] h-[40px] flex justify-center items-center bg-[#FF7294] rounded-full">
          See more
        </div>
      </div>
    </div>
  )
}
export default About;
