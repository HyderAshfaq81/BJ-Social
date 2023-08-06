import React from "react";
import Image from "../../assets/signupImg.jpeg";

const About = () => {
  return (
    <div className="bg-grey2 px-[20px] md:px-[100px] pt-10 md:pt-40 flex">
      <div className="w-[40%] md:flex hidden">
        <img src={Image} alt="images" className=" w-full h-[600px] rounded-[8px] "/>
      </div>
      <div className="w-full md:w-[60%] md:ml-20 flex flex-col justify-center items-center md:items-start">
        <div className="font-bold text-4xl flex justify-center md:justify-start">About Us</div>
        <div className="text-lg md:text-3xl leading-5 mt-5 md:mt-10 flex justify-center md:justify-start">The love method</div>
        <div className="text-xs md:text-xl leading-5 md:leading-7 mt-5 md:mt-10 flex justify-center md:justify-start md:text-start text-center">
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
