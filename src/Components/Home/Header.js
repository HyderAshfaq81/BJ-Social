import React, {useState} from "react";
import MBALogo from '../../assets/MBALogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("authToken"))
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="pb-6 bg-white lg:pb-0 pt-7">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 mx-2">
            <div className="flex justify-center my-4">
              <div className="flex justify-center">
                <a href="/home" className="md:flex hover:text-[#FF7294] text-white mb-5">
                  <img src={MBALogo} alt="logo" width={100} height={100}/>
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={() => toggleMenu()}
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              class="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
              href="/home"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
            >
              {" "}
              Home{" "}
            </a>

            <a
              href="/find_matches"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
            >
              {" "}
              Find Match{" "}
            </a>

            <a
              href="/home"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="/testimonail"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
            >
              {" "}
              Testomnial{" "}
            </a>
            <a
              href="/profile"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
            >
              {" "}
              Profile{" "}
            </a>
            <a
              href="/pricing"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
            >
              {" "}
              Pricing{" "}
            </a>
          </div>
          {!token &&
            <a
              href="/login"
              title=""
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-base border border-transparent rounded-md lg:inline-flex hover:base focus:base"
              role="button"
            >
              {" "}
              Login{" "}
            </a>
          }
          {token &&
            <a
              href="/login"
              title=""
              onClick={() => {
                localStorage.removeItem('authToken')
                // toast.success('Logged out successfully');
              }}
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-base border border-transparent rounded-md lg:inline-flex hover:base focus:base"
              role="button"
            >
              {" "}
              Logout{" "}
            </a>
          }
        </nav>
        {isMenuOpen &&
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="/home"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
                >
                  {" "}
                  Home{" "}
                </a>

                <a
                  href="/testimonail"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
                >
                  {" "}
                  Testimonial{" "}
                </a>

                <a
                  href="/find_matches"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
                >
                  {" "}
                  Find Match{" "}
                </a>

                <a
                  href="/home"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
                >
                  {" "}
                  About{" "}
                </a>
                <a
                  href="/home"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
                >
                  {" "}
                  Profile{" "}
                </a>
                <a
                  href="/pricing"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-base focus:text-base"
                >
                  {" "}
                  Pricing{" "}
                </a>
              </div>
            </div>

            <div className="px-6 mt-6">
              <a
                href="#"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-base border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Logout{" "}
              </a>
            </div>
          </nav>
        }
      </div>
    </header>
  );
};

export default Header;
