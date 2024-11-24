import React, { useContext, useEffect } from 'react'
import { DATA } from '../../context/DataContext'
import { Link } from 'react-router-dom'
import { SlMagnifier } from 'react-icons/sl'
import { BsBasket3Fill, BsList } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

function Header() {
  const { category } = useContext(DATA)

  return (
    <>
      <div className='bg-black py-[5px] text-center text-white text-[13px]'>Black Friday: 25% Off Sitewide + Up to 40% Off Select Outerwear*</div>
      <header className="relative px-[20px] py-[10px] bg-transparent flex flex-col justify-between h-[60vh] transition-all duration-1000 sm:h-[80vh] md:h-[100vh]">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="https://cdn.static.amplience.net/theory/_vid/dg_holiday_campaign_hp_hero_mobile/2fe64e60-41fb-4ab5-90dc-ab8c4972043a/video/17cb476c-da48-4131-956f-8da09e8a1466.mp4"
        ></video>
        <div className='flex flex-col relative'>
          <div className="flex justify-between items-center w-full z-10">
            <div className="flex items-center gap-4 w-[33.3%]">
              {/* hamburger menu */}
              <div>
                <div className='flex lg:hidden gap-3 items-center'>
                  <BsList className='text-white text-[13px] font-bold' />
                  <SlMagnifier className="text-white text-[11px]" />
                </div>
              </div>
              <ul className="gap-4 items-center hidden lg:flex">
                {category && category.map((item) => (
                  <li key={item.id} className="text-white text-[13px]">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex w-[33.3%] justify-center'>
              <img src="/img/theory.png" alt="Theory Logo" />
            </div>
            <div className="flex items-center gap-4 w-[33.3%] justify-end">
              <div className="hidden lg:flex items-center">
                <SlMagnifier className="text-white text-[11px]" />
                <a href="#" className="text-white text-[13px]">
                  Search
                </a>
              </div>
              <a href="#" className="text-white text-[13px] capitalize hidden lg:block">
                Sign in/register
              </a>
              <a href="#" className="text-white text-[13px] hidden lg:block">
                Wishlist
              </a>
              <a href="#" className="text-white text-[13px] block lg:hidden">
                <FaHeart />
              </a>
              <div className="relative">
                <BsBasket3Fill className="text-white hover:text-black text-[13px]" />
                <div className="absolute text-[13px] top-[-10px] right-[-10px] text-white">0</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 items-center transition-all duration-1000 pt-[250px] sm:pt-[400px] md:pt-[550px] xl:pt-[400px]'>
            <h1 className='text-white text-[20px] sm:text-[34px] font-archivo tracking-wider font-bold capitalize'>let's get together</h1>
            <p className='text-white text-[16px] text-center'>Cozy up to a season of celebration.</p>
            <div className='flex gap-3 items-center flex-col sm:flex-row'>
              <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>women's shop</button>
              <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>men's shop</button>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header