import React, { useState } from "react";
import signupImg from "../../assets/signupImg.jpeg";
import client from "../../assets/client.png"
import { Link } from "react-router-dom";
import './FindMatch.css'
const FindMatches = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const suggestions = [
    {
      name: "Liena Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Liena Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Liena Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Liena Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Liena Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Liena Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Brandy Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Brandy Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Brandy Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Brandy Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Brandy Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Brandy Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Brandy Mang",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Sara Love",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Sara Love",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Sara Love",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Sara Love",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Sara Love",
      desc: "I just came here, to entertain you.",
    },
    {
      name: "Liena Mang",
      desc: "I just came here, to entertain you.",
    }
  ]
  const totalItems = suggestions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSuggestions = suggestions.slice(startIndex, endIndex);
  return (
    <div className="mt-10 w-full min-h-screen">
      <div className="flex justify-center my-4">
        <a href="/" className="flex relative">
          <a href="/">
            <img
              src="https://logowik.com/content/uploads/images/sexy-woman1909.logowik.com.webp"
              className="w-[100px] h-[80px]"
            />
          </a>
          <div className="font-bold text-2xl flex items-center absolute top-4 -left-7">
            <div className="mr-7">MEET</div>
            <div>DATE</div>
          </div>
        </a>
      </div>
      <div className="bg-grey2 w-full min-h-screen pt-10">
        <div className="lg:w-[1280px] m-auto p-10 flex border-[0.1px] border-grey1/30 rounded-[8px]">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex justify-center bg-grey2">
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
            <div className="w-full grid grid-cols-3 justify-center m-auto gap-6">
              {currentSuggestions.map((profile, index) => (
                <div className="flex justify-evenly w-[100%]" key={index}>
                  <div className="w-[300px] flex flex-col justify-center">
                    <img src={client} alt="client" className="" />
                    <div className="flex justify-between items-center mt-2">
                      <div className="font-bold text-3xl">{profile.name}</div>
                      <div className="font-bold bg-base/50 rounded-full px-2 py-1 text-xs cursor-pointer">
                        Connect +
                      </div>
                    </div>
                    <div className="text-xl mt-2 text-center">{profile.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <nav className="flex justify-center my-4">
                <ul className="pagination space-x-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      className={`pagination-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FindMatches;
