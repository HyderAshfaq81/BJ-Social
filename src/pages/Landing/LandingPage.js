import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MBALogo from '../../assets/MBALogo.png';
import fbIcon from '../../assets/fbIcon.svg';
import twitterIcon from '../../assets/twitterIcon.svg';
import instaIcon from '../../assets/instaIcon.svg';
import './styles.css'
const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const img = new Image();
    img.src = MBALogo;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className='flex flex-col items-center justify-between w-full h-screen'>
      <div className={`flex flex-col items-center ${loaded ? 'animated' : ''} mt-10`}>
        <img
          src={MBALogo}
          alt='MBA Logo'
          className={`w-60 h-60 ${loaded ? 'bounceIn' : ''}`}
        />
        <p className='text-gray1 text-xl font-semibold mt-3 text-center'>
          A safe space for serious singles who value and want real relationships
        </p>
        <div className='w-full flex flex-col md:flex-row items-center justify-center md:gap-5'>
        <div className="text-white bg-[#FF7294] w-full md:w-[200px] h-[40px] flex items-center justify-center rounded-[20px] mt-10 cursor-pointer" onClick={() => navigate('login')}>Get Started</div>
        <div className="text-white bg-[#FF7294] w-full md:w-[200px] h-[40px] flex items-center justify-center rounded-[20px] mt-1 md:mt-10 cursor-pointer" onClick={() => navigate('/home')}>Home</div>
      </div>
      </div>
      <div className='flex justify-center items-center w-full text-black mt-10 bg-black py-2 px-4'>
        <Link href="#" className='ml-4 text-white text-xs md:text-xl font-medium'>
          www.marryingblackamerica.com
        </Link>
        <img src={twitterIcon} alt='twitter' className='w-10 h-10 ml-10'/>
        <img src={fbIcon} alt='facebook' className='w-10 h-10 ml-1'/>
        <img src={instaIcon} alt='Insta' className='w-10 h-10 ml-1'/>
        <div className='flex ml-5'>
          <img src={twitterIcon} alt='facebook' />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
