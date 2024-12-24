import React, { useContext, useState } from 'react'
import { DATA } from '../../context/DataContext';
import { BsBasket3Fill, BsList } from 'react-icons/bs';
import { SlMagnifier } from 'react-icons/sl';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BASKET } from '../../context/BasketContext';
import Loader from '../main/Loader';

function Header() {
  const { category } = useContext(DATA)
  const { showVideo } = useContext(DATA)
  const { totalCount } = useContext(BASKET)
  const [navbar, setNavbar] = useState(true)

  return (
    <>
      <div className='relative'>
        {
          category ? '' : <Loader />
        }
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
            <div className={`navbar group relative flex justify-between items-center h-[5vh] lg:h-[10vh] w-full z-40 ${showVideo && navbar ? 'text-white hover:text-black hover:bg-white' : 'bg-white text-black'}`}>
              <div className={`${navbar ? 'hidden pointer-events-none' : 'flex pointer-events-auto'} bg-white text-black absolute gap-2 p-[20px] z-50 top-[5vh] lg:top-[10vh] items-start flex-col w-[100%] transition-all duration-500 `}>
                {
                  category &&
                  category.map((item, index) => {
                    return (
                      <Link key={index} to={`/productsbyid/all/${item.id}`}>
                        <div className="cursor-pointer text-[13px] capitalize flex flex-col items-center categ">
                          {item.name}
                        </div>
                      </Link>
                    )
                  })
                }
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
                        <Link key={index} to={`/productsbyid/all/${item.id}`}>
                          <div className="text-[13px] capitalize text-ellipsis text-nowrap categ">
                            {item.name}
                          </div>
                        </Link>
                      )
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
                <Link to="/wishlist">
                  <a href="#" className=" text-[13px] hidden lg:block">
                    Wishlist
                  </a>
                </Link>
                <Link to="/wishlist">
                  <a href="#" className=" text-[13px] block lg:hidden">
                    <FaHeart />
                  </a>
                </Link>

                <div className="relative">
                  <Link to="/basket">
                    <BsBasket3Fill className=" hover:text-black text-[13px]" />
                  </Link>
                  <div className="absolute text-[13px] top-[-10px] right-[-10px] ">{totalCount}</div>
                </div>
              </div>
            </div>
            <div className={`flex flex-col gap-4 items-center tracking-wider transition-all duration-1000 pt-[150px] sm:pt-[250px] md:pt-[350px] z-10 xl:pt- [400px] ${showVideo ? 'block' : 'hidden'}`}>
              <h1 className='text-white text-[20px] sm:text-[34px] font-bold capitalize'>let's get together</h1>
              <p className='text-white text-[16px] text-center'>Cozy up to a season of celebration.</p>
              <div className='flex gap-3 items-center flex-col sm:flex-row'>
                <Link to={`/productsbyid/all`}><button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>view all</button></Link>
                {/* <Link to={`/productsbyid/Men`}><button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>men's shop</button></Link> */}
              </div>
            </div>
          </div>

        </header>
      </div>
    </>
  )
}

export default Header