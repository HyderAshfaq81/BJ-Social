import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import coverImage from '../../assets/cover.jpeg';
import './home.css';

const Home = () => {
  return (
    <div className="bg-image w-full h-screen px-10 pt-5 relative">
      <div className="flex justify-between">
        <div>
          <a href="/home" className="flex hover:text-[#FF7294] text-white">
            <div className="font-bold text-2xl flex items-center">
              <div className="mr-2">MEET</div>
              <div className="mr-2">&</div>
              <div>DATE</div>
            </div>
          </a>
        </div>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/home" className="text-2xl mr-10 font-bold hover:underline hover:text-[#FF7294] text-white">Home</Link>
            </li>
            <li>
              <Link to="/home" className="text-2xl mr-10 font-bold hover:underline hover:text-[#FF7294] text-white">Match</Link>
            </li>
            <li>
              <Link to="/home" className="text-2xl mr-10 font-bold hover:underline hover:text-[#FF7294] text-white">About</Link>
            </li>
            <li>
              <Link to="/home" className="text-2xl mr-10 font-bold hover:underline hover:text-[#FF7294] text-white">Testomoriam</Link>
            </li>
            <li>
              <Link to="/home" className="text-2xl mr-10 font-bold hover:underline hover:text-[#FF7294] text-white">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="text-2xl mr-10 font-bold hover:underline cursor-pointer hover:text-[#FF7294] text-white">
          Logout
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[60%] m-auto h-full text-white">
        <div className="text-4xl font-bold leading-7 mb-4">Find Your Partner With Ease</div>
        <div className="3xl font-[500] leading-7 text-center">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sit
          aldkja Lorem ipsum Lorem ipsum Lorem ipsum Lorem abc
          as;dfkas;l ipsum Lorem ipsum Lorem ipsum Lorem ipsum yeellllooaisdf
          asdlfjkasdf Lorem ipsum Lorem ipsum Lorem ipsum Lorem askdfh
          sa;dflkasf ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lsaldfjslfkorem
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sldfjaskfdj
          as;fdk;aslf Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          sa;dflk ipsum Lorem ipsum Lorem ipsum Lorem ipsum saldfkjasldfjk
          asd;flk Lorem ipsum Lorem ipsum Lorem ipsum Lorem asdfkjlasfj
          sa;flk ipsum Lorem ipsum Lorem ipsum Lorem ipsum saldfkj
        </div>
        <div className="text-white bg-[#FF7294] w-[200px] h-[40px] flex items-center justify-center rounded-[20px] mt-10 cursor-pointer">Get Started</div>
      </div>
    </div>
  )
}
export default Home;
