import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import coverImage from '../../assets/cover.jpeg';
import './home.css';
import { toast } from "react-toastify";
import MBALogo from '../../assets/MBALogo.png';

const Home = () => {
  const token = localStorage.getItem('authToken')
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-image w-full h-screen px-10 pt-5 relative">
      <div className="flex justify-between">
        <div className="hidden lg:flex justify-center">
          <a href="/home" className="md:flex hover:text-[#FF7294] text-white mb-5">
            <img src={MBALogo} alt="logo" width={100} height={100} className="rounded-[50%]"/>
          </a>
        </div>
        <nav class="w-full relative md:px-4 py-4 flex justify-between items-center">
          <div class="lg:hidden">
            <div class="navbar-burger flex items-center text-base p-3 cursor-pointer" onClick={() => toggleMenu()}>
              <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </div>
          </div>
          <ul class="hidden lg:flex lg:mx-auto lg:flex lg:items-center justify-center lg:w-auto lg:space-x-6 w-full">
            <li><a class="hover:text-lg text-xl text-white hover:text-base hover:font-bold font-bold" href="/home">Home</a></li>
            <li class="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a class="hover:text-lg text-xl text-white hover:text-base hover:font-bold font-bold" href="/find_matches">Find Match</a></li>
            <li class="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a class="hover:text-lg text-xl text-white hover:text-base hover:font-bold font-bold" href="/home">About</a></li>
            <li class="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a class="hover:text-lg text-xl text-white hover:text-base hover:font-bold font-bold" href="/pricing">Pricing</a></li>
            <li class="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a class="hover:text-lg text-xl text-white hover:text-base hover:font-bold font-bold" href="/testimonial">Testimonial</a></li>
            <li class="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a class="hover:text-lg text-xl text-white hover:text-base hover:font-bold font-bold" href="/profile">Profile</a></li>
          </ul>
        </nav>
        {isMenuOpen &&
          <div class="navbar-menu relative z-50 lg:hidden">
            <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div class="flex items-center mb-8 justify-between">
                <a href="/home" className="md:flex hover:text-[#FF7294] text-white mb-5">
                  <img src={MBALogo} alt="logo" width={100} height={100}/>
                </a>
                <button class="navbar-close" onClick={() => toggleMenu()}>
                  <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-base rounded" href="/home">Home</a>
                  </li>
                  <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-base rounded" href="/find_matches">Find Match</a>
                  </li>
                  <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-base rounded" href="/home">About</a>
                  </li>
                  <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-base rounded" href="/pricing">Pricing</a>
                  </li>
                  <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-base rounded" href="/testimonail">Testimonial</a>
                  </li>
                  <li class="mb-1">
                    <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-base rounded" href="/profile">Profile</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        }
        {token ?
          <div className="flex items-center text-lg md:text-2xl md:mr-10 font-bold hover:underline cursor-pointer hover:text-[#FF7294] text-white"
            onClick={() => {
              localStorage.removeItem('authToken')
              toast.success('Logged out successfully');
              navigate('/login')
            }}
          >
            Logout
          </div>
        :
          <div className="flex items-center text-lg md:text-2xl md:mr-10 font-bold hover:underline cursor-pointer hover:text-[#FF7294] text-white"
            onClick={() => {
              navigate('/login')
            }}
          >
            Login
          </div>
        }
      </div>
      <div className="flex flex-col justify-center md:items-center w-full md:w-[80%] xl:w-[70%] 2xl:w-[60%] h-[80vh] md:m-auto text-white">
        <div className="text-lg md:text-xl md:text-4xl font-bold leading-7 mb-4">Find Your Partner With Ease</div>
        <div className="text-[8px] md:text-sm font-[500] leading-3 lg:leading-7 md:text-center ">
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
        {/* <div className="text-xs md:text-sm font-[500] leading-2 md:text-center flex md:hidden">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum sit
          aldkja Lorem ipsum Lorem ipsum Lorem ipsum Lorem abc
          as;dfkas;l ipsum Lorem ipsum Lorem ipsum Lorem ipsum yeellllooaisdf
        </div> */}
        <div className="text-white bg-[#FF7294] w-[200px] h-[40px] flex items-center justify-center rounded-[20px] mt-10 cursor-pointer">Get Started</div>
      </div>
    </div>
  )
}
export default Home;
