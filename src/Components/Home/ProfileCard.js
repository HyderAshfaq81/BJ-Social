import React from 'react'
import userAvatar from '../../assets/userAvatar1.png'
import heartIcon from '../../assets/heartIcon.svg'
import { useDispatch } from 'react-redux'
import { allLikedUser, likeUser } from '../../redux/actions/profiles'
const ProfileCard = ({profile}) => {
  const fullName = profile?.first_name.concat(" ", profile?.last_name)
  const dispatch = useDispatch();
  const handleLike = async (profile) => {
    console.log('profile is', profile)
    const id = profile.id;
    const dataToSend = JSON.stringify({id});
    const response = dispatch(likeUser(dataToSend));
    if (response.error) {
    } else {
      // dispatch(allLikedUser());
    }
  }
  return (
    <div className="w-[90%] flex flex-col justify-center">
      <img src={userAvatar} alt="client" className=""/>
      <div className="flex justify-between items-center mt-2">
        <div className="font-bold text-3xl truncate w-[70%]">
          {fullName}
        </div>
        <img src={heartIcon} alt="client" className="text-xs cursor-pointer w-8 h-8" onClick = {() => handleLike(profile)}/>
        {/* <div className="font-bold bg-base/50 rounded-full px-2 py-1 text-xs cursor-pointer">
          Connect +
        </div> */}
      </div>
      <div className="text-xl mt-2 text-start">
        I just came here, to entertain you. Follow me to get entertainerd.
      </div>
    </div>
  )
}
export default ProfileCard
