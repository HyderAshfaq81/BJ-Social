import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LikedProfileCard from '../Home/LikedProfileCard'

const Connections = () => {
  const allProfiles = useSelector(state => state.allLikedProfiles.likedProfiles)
  return (
    <div className="bg-grey2">
      <div className="flex justify-center bg-grey2 pt-40">
        <div className="flex flex-col justify-center items-start w-[60%] ">
          <div className="font-bold text-3xl mb-5 text-3xl"> Your Liked Profiles </div>
        </div>
      </div>
      <div className="w-[90%] flex flex-col justify-center m-auto">
        <div className="flex justify-evenly w-[100%] flex-wrap">
          {allProfiles?.map((profile, index) => {
            return(
              <div key={index} className="w-[30%]">
                <LikedProfileCard profile={profile}/>
              </div>
            )
            })}
        </div>
      </div>
    </div>
  )
}

export default Connections
