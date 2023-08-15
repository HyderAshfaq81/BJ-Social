import React, { useState } from "react";
import signupImg from "../../assets/signupImg.jpeg";
import client from "../../assets/client.png"
import { Link } from "react-router-dom";
import './FindMatch.css'
import Header from "../../Components/Home/Header";
import { useSelector } from "react-redux";
import userAvatar from '../../assets/userAvatar1.png'
import ProfileCard from "../../Components/Home/ProfileCard";
const FindMatches = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const allProfiles = useSelector(state => state.allProfiles.profiles)
  const itemsPerPage = 6;
  const totalItems = allProfiles?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const currentSuggestions = allProfiles?.slice(startIndex, endIndex);
  return (
    <div className="mt-2 w-full min-h-screen">
      <Header />
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
            {!totalItems &&
              <div className="font-bold text-xl mb-5 text-3xl"> Please login or signup to connect with friends </div>
            }
            <div className="w-full grid grid-cols-3 justify-center m-auto gap-6">
              {allProfiles?.map((profile, index) => {
                return(
                  <div className="flex justify-evenly w-[100%]" key={index}>
                    <ProfileCard profile={profile}/>
                  </div>
                )
                })}
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
