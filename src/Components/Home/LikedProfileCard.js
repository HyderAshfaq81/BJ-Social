import React from 'react'
import userAvatar from '../../assets/userAvatar1.png'
import heartIcon from '../../assets/heartIconFill.svg'
import { useDispatch } from 'react-redux'
import { likeUser } from '../../redux/actions/profiles'
const LikedProfileCard = ({profile}) => {
  const fullName = profile?.first_name.concat(" ", profile?.last_name)
  const dispatch = useDispatch();
  const handleLike = (profile) => {
    console.log('profile is', profile)
    // const id = profile.id;
    // const dataToSend = JSON.stringify({id});
    // dispatch(likeUser(dataToSend));
  }
  return (
    <div className="w-[90%] flex flex-col justify-center">
      <img src={userAvatar} alt="client" className=""/>
      <div className="flex justify-between items-center mt-2">
        <div className="font-bold text-3xl truncate w-[70%]">
          {fullName}
        </div>
        <img src={heartIcon} alt="client" className="text-xs cursor-pointer w-8 h-8" onClick = {() => handleLike(profile)}/>
      </div>
      <div className="text-xl mt-2 text-start">
        I just came here, to entertain you. Follow me to get entertainerd.
      </div>
    </div>
  )
}
export default LikedProfileCard
