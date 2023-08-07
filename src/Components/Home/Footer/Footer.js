import React from "react";
import MBALogo from '../../../assets/MBALogo.png';

const Footer = () => {
  return (
    <div className="pt-5 md:pt-40">
      <div className="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="w-full md:w-11/12">
          <div className="flex justify-center">
            <a href="/home" className="md:flex hover:text-[#FF7294] text-white mb-5">
              <img src={MBALogo} alt="logo" width={100} height={100}/>
            </a>
          </div>
          <div className="mt-5 text-xs md:text-xl text-gray-500 font-medium text-center">
            Lorem Ipsum is simply dummy text of the printing and industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
        </div>
        <div>
          <div className="text-[16px] md:text-3xl font-medium md:font-bold mb-5 md:mb-10 mt-3">Company Info</div>
          <div className="text-sm md:text-xl text-gray-500 md:font-medium leading-5 md:leading-8 ml-3">
            <div>Home</div>
            <div>Match</div>
            <div>About</div>
            <div>Testomoriam</div>
            <div>Contacts Us</div>
          </div>
        </div>
        <div>
          <div className="text-[16px] md:text-3xl  font-medium md:font-bold mb-5 md:mb-10 mt-3">Resources</div>
          <div className="text-sm md:text-xl text-gray-500 md:font-medium leading-5 md:leading-8 ml-3">
            <div>IOS & Andriod </div>
            <div>Watch a Demo</div>
            <div>Customers</div>
            <div>API</div>
          </div>
        </div>
        <div>
          <div className="text-[16px] md:text-3xl font-medium md:font-bold mb-5 md:mb-10 mt-3">Contact</div>
          <div className="text-sm md:text-xl text-gray-500  md:font-medium leading-5 md:leading-8 ml-3">
            <div>Newyork city. abc 1122</div>
            <div>+11122222000</div>
          </div>
        </div>
      </div>
      <div className="text-xs md:text-xl w-full flex justify-center items-center bg-[#FF7294] py-3 mt-5">Copyright Company. All right reserved</div>
    </div>
  )
}
export default Footer;
