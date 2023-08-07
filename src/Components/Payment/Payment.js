import React from "react";
import Header from "../Home/Header";

const Payment  = () => {
  const suggestions = [
    {
      type: "Starter",
      amount: "20",
      desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sit"
    },
    {
      type: "Medium",
      amount: "50",
      desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sit"
    },
    {
      type: "Premium",
      amount: "100",
      desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sit"
    },
  ]
  return (
    <>
      <div className="mt-10 w-full min-h-screen">
        <Header />
        <div className="bg-grey2 w-full min-h-screen pt-10">
          <div className="w-[95%] xl:w-[1200px] m-auto p-10 flex border-[0.1px] border-grey1/30 rounded-[8px]">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex justify-center bg-grey2">
                <div className="flex flex-col justify-center items-center w-full md:w-[60%] ">
                  <div className="font-bold mb-5 text-xl md:text-3xl"> Payment's </div>
                  <div className="text-center bg-grey2 mb-10 text-sm md:text-[18px]">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sit
                    aldkja Lorem ipsum Lorem ipsum Lorem ipsum Lorem abc
                    as;dfkas;l ipsum Lorem ipsum Lorem ipsum Lorem ipsum yeellllooaisdf
                    asdlfjkasdf Lorem ipsum Lorem ipsum Lorem ipsum Lorem askdfh
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center m-auto gap-6">
                {suggestions.map((profile, index) => (
                  <div className="flex justify-evenly w-[100%] border-[0.1px] border-[#000000]/20 rounded-[8px]" key={index}>
                    <div className="w-[300px] flex flex-col justify-center my-4 mx-auto">
                      <div className="font-bold text-xl md:text-4xl m-auto uppercase">{profile.type}</div>
                      <div className="font-bold text-md md:text-xl m-auto">(1 Connects = 0.25$)</div>
                      <div className="m-auto font-bold text-[16px] md:text-xl m-auto my-10 text-black/20"><span className="text-2xl md:text-4xl text-black">{profile.amount} </span>€/month</div>
                      <div className="text-xs md:text-sm m-auto text-center my-6 text-black/80">{profile.desc}</div>
                      <div className="font-bold bg-base py-2 text-center rounded-[8px] w-[90%] m-auto text-[16px] md:text-lg">Payment</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Payment;
