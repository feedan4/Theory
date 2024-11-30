import React, { useContext, useEffect, useState } from 'react'
import { DATA } from '../../context/DataContext';
import { BsBasket3Fill, BsList } from 'react-icons/bs';
import { SlMagnifier } from 'react-icons/sl';
import { FaHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const { category } = useContext(DATA)
    const { showVideo } = useContext(DATA)

    return (
      <>
        <div className='bg-black py-[5px] text-center text-white text-[13px]'>Black Friday: 25% Off Sitewide + Up to 40% Off Select Outerwear*</div>
        <header className={`relative bg-transparent flex flex-col justify-between ${showVideo ? 'h-[60vh] transition-all duration-1000 sm:h-[80vh] md:h-[100vh]' : 'h-full'}`}>
          <video
            autoPlay
            loop
            muted
            style={{ objectPosition: "center 10%" }}
            className={`absolute top-0 left-0 w-full h-full object-cover ${showVideo ? 'block z-10' : 'hidden'}`}
            src="https://cdn.static.amplience.net/theory/_vid/dg_holiday_campaign_hp_hero_mobile/2fe64e60-41fb-4ab5-90dc-ab8c4972043a/video/17cb476c-da48-4131-956f-8da09e8a1466.mp4"
          ></video>
          <div className='flex flex-col relative w-[100%]'>
            <div className={`flex justify-between items-center w-full z-10 navbar group ${showVideo ? 'text-white hover:text-black hover:bg-white' : 'bg-white text-black'}`}>
              <div className="flex items-center w-[33.3%] ">
                <div>
                  <div className='flex lg:hidden gap-3 items-center'>
                    <BsList className='text-[13px] font-bold hamburger' />
                    <SlMagnifier className=" text-[11px]" />
                  </div>
                </div>
                <div className="gap-4 pl-[20px] items-center hidden lg:flex w-[100%]">
                  {category &&
                    category.map((item, index) => {
                      return (
                        <div key={index} className=" flex flex-col gap-2">
                          <div className="text-[13px] categ">
                            {item.name}
                          </div>
                          <div className={`bg-white text-black flex flex-col p-[20px] text-[13px] gap-2 top-[50px] subcateg absolute w-[100%] opacity-0 hover:opacity-100 transition-opacity duration-300 ${!showVideo ? 'z-10' : ''}`}>
                            {item.Subcategory &&
                              item.Subcategory.map((elem, subIndex) => (
                                <div key={subIndex}>
                                  {elem.name}
                                </div>
                              ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className='flex w-[33.3%] justify-center z-10 logo'>
                <img className={`${showVideo ? 'group-hover:invert' : 'invert'}`} src="/img/theory.png" alt="Theory Logo" />
              </div>
              <div className="flex items-center gap-4 w-[33.3%] justify-end pr-[20px]">
                <div className="hidden lg:flex items-center">
                  <SlMagnifier className=" text-[11px]" />
                  <a href="#" className=" text-[13px]">
                    Search
                  </a>
                </div>
                <a href="#" className=" text-[13px] capitalize hidden lg:block">
                  Sign in/register
                </a>
                <a href="#" className=" text-[13px] hidden lg:block">
                  Wishlist
                </a>
                <a href="#" className=" text-[13px] block lg:hidden">
                  <FaHeart />
                </a>
                <div className="relative">
                  <BsBasket3Fill className=" hover:text-black text-[13px]" />
                  <div className="absolute text-[13px] top-[-10px] right-[-10px] ">0</div>
                </div>
              </div>
            </div>
            <div className={`flex flex-col gap-4 items-center transition-all duration-1000 pt-[250px] sm:pt-[400px] md:pt-[550px] z-20 xl:pt-[400px] ${showVideo ? 'block' : 'hidden'}`}>
              <h1 className='text-white text-[20px] sm:text-[34px] trade-gothic tracking-wider font-bold capitalize'>let's get together</h1>
              <p className='text-white text-[16px] text-center'>Cozy up to a season of celebration.</p>
              <div className='flex gap-3 items-center flex-col sm:flex-row'>
                <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'><Link to={`/productsbyid`}>women's shop</Link></button>
                <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'><Link to={`/productsbyid`}>men's shop</Link></button>
              </div>
            </div>
          </div>
  
        </header>
      </>
    )
}

export default Header