import React from "react";
import pattner from "../../assets/pattner.jpeg";

const HowItWorks = () => {
  return (
    <div className="bg-grey2">
      <div className="">
        <div className="flex justify-evenly w-full m-auto bg-white rounded-[8px] py-5 w-[80%]">
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FF7294] flex justify-center">15k</div>
            <div className="text-xs md:text-lg lg:text-2xl text-black font-bold">Clients</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FF7294]">150k</div>
            <div className="text-xs md:text-lg lg:text-2xl text-black font-bold">Experience</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FF7294] justify-center">15</div>
            <div className="text-xs md:text-lg lg:text-2xl text-black font-bold">Contries Worldwide</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FF7294]">100+</div>
            <div className="text-xs md:text-lg lg:text-2xl text-black font-bold">Hours of Effort</div>
          </div>
        </div>
        <div className="bg-grey2 w-full pt-5 md:pt-20 xl:pt-40 flex justify-center">
          <div className="flex flex-col justify-center items-center w-[60%]">
            <div className="text-2xl md:text-4xl font-bold leading-7 mb-4">How It Works</div>
            <div className="text-[8px] md:text-sm font-[500] leading-3 lg:leading-7 text-center">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sit
              aldkja Lorem ipsum Lorem ipsum Lorem ipsum Lorem abc
              as;dfkas;l ipsum Lorem ipsum Lorem ipsum Lorem ipsum yeellllooaisdf
              asdlfjkasdf Lorem ipsum Lorem ipsum Lorem ipsum Lorem askdfh
              sa;dflkasf ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lsaldfjslfkorem
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ips
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 xl:mt-40 flex md:flex-row flex-col lg:justify-evenly items-center">
        <div className="flex flex-col justify-center items-center w-[300px] border-[0.5px] rounded-[8px] mb-3 lg:mb-0">
          <img src={pattner} alt="pattner"  className="rounded-full flex justify-center my-10"/>
          <div className="font-bold mt-2">Choose your partner</div>
          <div className="text-[8px] md:text-sm leading-3 text-grey1 flex justify-center items-center text-center my-4 w-[80%]">
            Choose your partner Choose your partner Choose your partner Choose your partner Choose your partner
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px] border-[0.5px] rounded-[8px] mb-3 lg:mb-0">
          <img src={pattner} alt="pattner"  className="rounded-full flex justify-center my-10"/>
          <div className="font-bold mt-2">Choose your partner</div>
          <div className="text-[8px] md:text-sm leading-3 text-grey1 flex justify-center items-center text-center my-4 w-[80%]">
            Choose your partner Choose your partner Choose your partner Choose your partner Choose your partner
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px] border-[0.5px] rounded-[8px] mb-3 lg:mb-0">
          <img src={pattner} alt="pattner"  className="rounded-full flex justify-center my-10"/>
          <div className="font-bold mt-2">Choose your partner</div>
          <div className="text-[8px] md:text-sm leading-3 text-grey1 flex justify-center items-center text-center my-4 w-[80%]">
            Choose your partner Choose your partner Choose your partner Choose your partner Choose your partner
          </div>
        </div>
      </div>
    </div>
  )
}
export default HowItWorks;
