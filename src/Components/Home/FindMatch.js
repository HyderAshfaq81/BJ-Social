import React, { useEffect, useState } from "react";
import client from "../../assets/client.png"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { toast } from "react-toastify";

const FindMatch = () => {
  const allProfiles = useSelector(state => state.allProfiles.profiles)
  console.log('allProfiles', allProfiles)
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      toast.error('You need to signup or login to continue')
    }
  },[])
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
      <div className="w-[90%] flex flex-col justify-center m-auto">
        <div className="flex justify-evenly w-[100%]">
          {allProfiles.length === 0 && 
            <div className="font-bold text-xl mb-5 text-3xl"> Please login or signup to connect with friends </div>
          }
          {allProfiles !== null &&
            allProfiles?.slice(0,3)?.map((profile, index) => {
              return(
                <div key={index} className="w-[30%]">
                  <ProfileCard profile={profile}/>
                </div>
              )
              })
          }
        </div>
        <div className="flex items-end text-base justify-end">
          <Link to="/find_matches" className="cursor-pointer font-medium">Find Out More {'>'} </Link>
        </div>
      </div>
    </div>
  )
}
export default FindMatch;
