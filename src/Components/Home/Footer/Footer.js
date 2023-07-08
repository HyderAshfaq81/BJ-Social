import React from "react";

const Footer = () => {
  return (
    <div className="pt-40">
      <div className="w-[80%] m-auto grid grid-cols-4">
        <div className="w-11/12">
          <div className="flex justify-center">
            <a href="/" className="ml-10 flex relative">
              <a href="/">
                <img src="https://logowik.com/content/uploads/images/sexy-woman1909.logowik.com.webp" className="w-[100px] h-[80px]" />
              </a>
              <div className="font-bold text-2xl flex items-center absolute top-4 -left-7">
                <div className="mr-7">MEET</div>
                <div>DATE</div>
              </div>
            </a>
          </div>
          <div className="mt-5 text-xl text-gray-500 font-medium">
            Lorem Ipsum is simply dummy text of the printing and industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-10 mt-3">Company Info</div>
          <div className="text-xl text-gray-500 font-medium leading-8 ml-3">
            <div>Home</div>
            <div>Match</div>
            <div>About</div>
            <div>Testomoriam</div>
            <div>Contacts Us</div>
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-10 mt-3">Resources</div>
          <div className="text-xl text-gray-500 font-medium leading-8 ml-3">
            <div>IOS & Andriod </div>
            <div>Watch a Demo</div>
            <div>Customers</div>
            <div>API</div>
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-10 mt-3">Contact</div>
          <div className="text-xl text-gray-500 font-medium leading-8 ml-3">
            <div>Newyork city. abc 1122</div>
            <div>+11122222000</div>
          </div>
        </div>
      </div>
      <div className="text-xl w-full flex justify-center items-center bg-[#FF7294] py-3 mt-5">Copyright Company. All right reserved</div>
    </div>
  )
}
export default Footer;
