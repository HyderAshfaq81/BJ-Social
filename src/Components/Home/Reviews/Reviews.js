import React from "react";
import happy from "../../../assets/happyGirl.jpg";
import star from '../../../assets/star.svg';

const Reviews = () => {
  return (
    <div className="mt-40 mx-40">
      <div className="text-[#FF7294] text-xl font-bold">Reviews</div>
      <div className="text-6xl font-bold mt-5 leading-5">What client think about us!</div>
      <div className="mt-7 w-[50%] text-xl text-gray1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
      <div className="mt-10 ml-10 flex justify-evenly">
        <div className="w-[300px]">
          <div className="flex items-center justify-center mb-5">
            <img src={happy} alt="happy girl" className="w-[100px] h-[100px] object-cover rounded-full"/>
          </div>
          <div className="text-[16px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div className="flex justify-center mt-5">
            <img src={star} alt="star" />
          </div>
          <div className="flex justify-center mt-5">
            <div className="text-gray-500"> Jeeca Love</div>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="flex items-center justify-center mb-5">
            <img src={happy} alt="happy girl" className="w-[100px] h-[100px] object-cover rounded-full"/>
          </div>
          <div className="text-[16px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div className="flex justify-center mt-5">
            <img src={star} alt="star" />
          </div>
          <div className="flex justify-center mt-5">
            <div className="text-gray-500"> Jeeca Love</div>
          </div>
        </div>
        <div className="w-[300px]">
          <div className="flex items-center justify-center mb-5">
            <img src={happy} alt="happy girl" className="w-[100px] h-[100px] object-cover rounded-full"/>
          </div>
          <div className="text-[16px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div className="flex justify-center mt-5">
            <img src={star} alt="star" />
          </div>
          <div className="flex justify-center mt-5">
            <div className="text-gray-500"> Jeeca Love</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Reviews;
