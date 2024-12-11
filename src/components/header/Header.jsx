import React, { useContext, useState } from 'react'
import { DATA } from '../../context/DataContext';
import { BsBasket3Fill, BsList } from 'react-icons/bs';
import { SlMagnifier } from 'react-icons/sl';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const { category } = useContext(DATA)
  const { showVideo } = useContext(DATA)
  const [navbar, setNavbar] = useState(true)

  const navbarImages = [
    "https://ak-media.theory.com/i/theory/11.1.24-W-Nov-Cashmere-Flyout?$mediaTablet$",
    "https://ak-media.theory.com/i/theory/11.1.24-M-Nov-Sweater-Shop-Flyout?$media$",
    "https://brendyol.apasni.me/assets/img/header-list3.webp",
    "https://brendyol.apasni.me/assets/img/header-list4.webp",
    "https://brendyol.apasni.me/assets/img/header-list5.jpg"
  ]

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
          src="https://ak-media.theory.com/v/theory/DG_Cashmere_HP_Hero_Desktop/fullhd?protocol=https"
        ></video>
        <div className='flex flex-col relative w-[100%]'>
          <div className={`navbar group relative flex justify-between items-center h-[5vh] lg:h-[10vh] w-full z-10 ${showVideo && navbar ? 'text-white hover:text-black hover:bg-white' : 'bg-white text-black'}`}>
            <div className={`${navbar ? 'hidden' : 'flex'} bg-white text-black absolute gap-2 p-[20px] top-[5vh] lg:top-[10vh] items-start flex-col w-[100%] transition-all duration-500 `}>
              {category &&
                category.map((item, index) => {
                  return (
                    <div className="text-[13px] flex flex-col items-center categ">
                      {item.name}

                    </div>
                  );
                })}
            </div>
            <div className="flex items-center w-[33.3%] pl-[20px]">
              <div>
                <div className='flex lg:hidden gap-3 items-center'>
                  <BsList onClick={() => setNavbar(!navbar)} className='text-[13px] font-bold hamburger' />
                  <SlMagnifier className=" text-[11px]" />
                </div>
              </div>
              <div className="gap-4 pl-[20px] items-center hidden lg:flex w-[100%]">
                {
                  category &&
                  category.map((item, index) => {
                    return (
                      <div className="text-[13px] categ">
                        {item.name}
                        <div className={`subcateg bg-white text-black top-[50px] text-[13px] transition-all duration-1000 w-[100%] hidden  ${!showVideo ? 'z-10' : ''}`}>
                          <div className='flex flex-col p-[20px] gap-3'>
                            {item.Subcategory &&
                              item.Subcategory.map((elem, subIndex) => (
                                <div key={subIndex}>
                                  {elem.name}
                                </div>
                              ))}
                          </div>
                          <div>

                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className='flex w-[33.3%] justify-center z-10 logo'>
              <Link to="/">
                <img className={`${showVideo && navbar ? 'group-hover:invert' : 'invert'} w-[130px] lg:w-[200px] `} src="/img/theory.png" alt="Theory Logo" />
              </Link>
            </div>
            <div className="flex items-center gap-4 w-[33.3%] justify-end pr-[20px]">
              <div className="hidden lg:flex items-center">
                <SlMagnifier className=" text-[11px]" />
                <a href="#" className=" text-[13px]">
                  Search
                </a>
              </div>
              <Link to={`/login`} className=" text-[13px] capitalize hidden lg:block">
                Sign in/register
              </Link>
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
          <div className={`flex flex-col gap-4 items-center tracking-wider transition-all duration-1000 pt-[150px] sm:pt-[250px] md:pt-[350px] z-20 xl:pt- [400px] ${showVideo ? 'block' : 'hidden'}`}>
            <h1 className='text-white text-[20px] sm:text-[34px] font-bold capitalize'>let's get together</h1>
            <p className='text-white text-[16px] text-center'>Cozy up to a season of celebration.</p>
            <div className='flex gap-3 items-center flex-col sm:flex-row'>
              <Link to={`/productsbyid/Women/1`}><button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>women's shop</button></Link>
              <Link to={`/productsbyid/Men/2`}><button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>men's shop</button></Link>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header