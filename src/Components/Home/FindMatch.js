import React from "react";
import client from "../../assets/client.png"

const FindMatch = () => {
  return (
    <div className="bg-grey2">
      <div className="flex justify-center bg-grey2 pt-40">
        <div className="flex flex-col justify-center items-center w-[60%] ">
          <div className="font-bold text-3xl mb-5 text-3xl"> Find Match </div>
          <div className="text-center bg-grey2 mb-10 text-[18px]">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sit
            aldkja Lorem ipsum Lorem ipsum Lorem ipsum Lorem abc
            as;dfkas;l ipsum Lorem ipsum Lorem ipsum Lorem ipsum yeellllooaisdf
            asdlfjkasdf Lorem ipsum Lorem ipsum Lorem ipsum Lorem askdfh
          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="w-[300px] flex flex-col justify-center">
          <img src={client} alt="client" className=""/>
          <div className="font-bold text-3xl mt-2">
            Liena Mang 
          </div>
          <div className="text-xl mt-2 text-center">
            I just came here, to entertain you. Follow me to get entertainerd.
          </div>
        </div>
        <div className="w-[300px] flex flex-col justify-center">
          <img src={client} alt="client" className=""/>
          <div className="font-bold text-3xl mt-2">
            Liena Mang 
          </div>
          <div className="text-xl mt-2 text-center">
            I just came here, to entertain you. Follow me to get entertainerd.
          </div>
        </div>
        <div className="w-[300px] flex flex-col justify-center">
          <img src={client} alt="client" className=""/>
          <div className="font-bold text-3xl mt-2 ">
            Liena Mang 
          </div>
          <div className="text-xl mt-2 text-center">
            I just came here, to entertain you. Follow me to get entertainerd.
          </div>
        </div>
      </div>
    </div>
  )
}
export default FindMatch;
