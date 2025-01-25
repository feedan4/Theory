import React, { useContext, useState } from 'react'
import { DATA } from '../../context/DataContext';
import { BsBasket3Fill, BsList } from 'react-icons/bs';
import { SlMagnifier } from 'react-icons/sl';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BASKET } from '../../context/BasketContext';
import Loader from '../main/Loader';

function Header() {
  const { data } = useContext(DATA)
  const { category } = useContext(DATA)
  const { sebet } = useContext(BASKET)
  const [navbar, setNavbar] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [fixed, setFixed] = useState()
  const [canvas, setCanvas] = useState("-100")
  const [search, setSearch] = useState("-100")

  function showCanvas(right) {
    setCanvas(right)
  }

  function showSearch(right) {
    setSearch(right)
  }

  onscroll = function () {
    if (window.scrollY >= 0) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  // console.log(navbar)
  const filteredData = searchTerm ? data?.data?.data?.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : []

  return (
    <>
      {
        category ? '' : <Loader />
      }
      <div className={`relative`}>
        {canvas === '0' && (
          <div className="fixed inset-0 bg-black opacity-70 z-50" onClick={() => showCanvas('-100')}></div>
        )}
        {search === '0' && (
          <div className="fixed inset-0 bg-black opacity-70 z-50" onClick={() => showSearch('-100')}></div>
        )}
        {!navbar && (
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setNavbar(navbar)}></div>
        )}
        <div className={`w-[100%] md:w-[60%] lg:w-[40%] xl:w-[25%] z-50 ${fixed ? 'fixed top-0' : 'absolute'} ${search === '0' ? 'right-[0px]' : 'right-[-100%]'} bg-white flex flex-col gap-4 transition-all overflow-scroll duration-700 h-[100vh] noscroll py-[20px] px-[40px]`}>
          <div className='flex justify-between items-center'>
            <p></p>
            <p className='capitalize font-bold text-[20px] my-[20px]'>search</p>
            <p onClick={() => showSearch('-100')} className='inline-block text-[20px] cursor-pointer'>X</p>
          </div>
          <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className='w-full border border-[#bebebe] text-[12px] py-[10px] px-[5px] capitalize' placeholder='search' />
          {
            filteredData.length > 0 ? (
              filteredData.map((item, i) => (
                <Link key={i} to={`/details/${item.id}`}>
                  <div onClick={() => showSearch('-100')} key={i} className="flex bg-transparent gap-3 items-start">
                    <div className="w-[30px] sm:w-[50px] h-[30px] sm:h-[60px]">
                      <img src={item.images[0]} className="w-[100%] h-[100%]" alt={item.name} />
                    </div>
                    <div className="text-[10px] xs:text-[14px] flex flex-col items-start gap-1">
                      <p className="#212529 text-start overflow-hidden font-semibold">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No results found.</p>
            )
          }
        </div>
        <div className={`w-[100%] md:w-[60%] lg:w-[40%] xl:w-[25%] z-50 ${fixed ? 'fixed top-0' : 'absolute'} ${canvas === '0' ? 'right-[0px]' : 'right-[-100%]'} bg-white flex flex-col transition-all overflow-scroll duration-700 h-[100vh] noscroll py-[20px] px-[40px]`}>
          <div className='flex justify-between items-center'>
            <p></p>
            <p className='capitalize font-bold text-[22px] my-[20px]'>register</p>
            <p onClick={() => showCanvas('-100')} className='inline-block text-[20px] cursor-pointer'>X</p>
          </div>
          <div className='flex flex-col gap-4 text-[11px]'>
            <div className='w-full flex flex-col gap-2 items-start justify-between'>
              <div className='capitalize w-full'>* first name</div>
              <input className='w-full border border-[#bebebe] p-[5px]' placeholder='First name' />
            </div>
            <div className='w-full flex flex-col gap-2 items-start justify-between'>
              <div className='capitalize w-full'>* last name</div>
              <input className='w-full border border-[#bebebe] p-[5px]' placeholder='Last name' />
            </div>
            <div className='w-full flex flex-col gap-2 items-start justify-between'>
              <div className='capitalize w-full'>* email address</div>
              <input className='w-full border border-[#bebebe] p-[5px]' placeholder='Email address' />
            </div>
            <div className='w-full flex flex-col gap-2 items-start justify-between'>
              <div className='capitalize w-full'>confirm email address</div>
              <input className='w-full border border-[#bebebe] p-[5px]' placeholder='Confirm email address' />
            </div>
            <div className='w-full flex flex-col gap-2 items-start justify-between'>
              <div className='capitalize w-full'>* password</div>
              <input className='w-full border border-[#bebebe] p-[5px]' placeholder='Password (8-255 characters)' />
            </div>
            <div className='w-full flex flex-col gap-2 items-start justify-between'>
              <div className='capitalize w-full'>* confirm password</div>
              <input className='w-full border border-[#bebebe] p-[5px]' placeholder='Confirm password' />
            </div>
            <div className='w-full flex flex-col gap-2 items-start justify-between'>
              <div className='capitalize w-full'>birth date</div>
              <div className='w-full flex items-center justify-between'>
                <select className='w-[30%] border text-black border-[#bebebe] p-[5px] capitalize'>
                  <option>mon</option>
                  <option>tue</option>
                  <option>wed</option>
                  <option>thur</option>
                  <option>fri</option>
                  <option>sat</option>
                  <option>sun</option>
                </select>
                <select className='w-[30%] border text-black border-[#bebebe] p-[5px] capitalize'>
                  <option>day</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
                <input type='text' className='w-[30%] border border-[#bebebe] p-[5px] capitalize' placeholder='Year' />
              </div>
            </div>
            <div className='w-full flex flex-col gap-2 items-start justify-between'>
              <div className='capitalize w-full'>gender</div>
              <div className='w-full flex items-center justify-between'>
                <div className='w-[49%] border border-[#bebebe] p-[5px] flex items-center gap-2'>
                  <input type='radio' name='sex' className={`w-[15px] h-[15px] border-1 border-black`} />
                  <div className='capitalize'>female</div>
                </div>
                <div className='w-[49%] border border-[#bebebe] p-[5px] flex items-center gap-2'>
                  <input type='radio' name='sex' className={`w-[15px] h-[15px] border-1 border-black`} />
                  <div className='capitalize'>male</div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <button className={`w-[10px] h-[10px] border-2 border-white outline outline-1 outline-black`}></button>
              <div className='capitalize text-[11px]'>I'd like to hear from Theory</div>
            </div>
            <div className='text-[9px]'>1By checking this box, you consent to receive emails about Theory's latest collections, exclusive offers, and special events. You may revoke your consent at any time by clicking unsubscribe at the bottom of any email from us. By clicking 'SAVE' below you accept the terms of our Privacy Policy</div>
            <hr className='w-full h-[1px] border-none bg-[#bebebe]' />
            <button onClick={() => showCanvas('-100')} className='w-full text-center text-[12px] bg-black border border-black text-white uppercase py-[5px]'>register</button>
          </div>
        </div>
        <div className='bg-black py-[5px] text-center text-white text-[13px]'>Black Friday: 25% Off Sitewide + Up to 40% Off Select Outerwear*</div>
        <div className='flex flex-col relative w-[100%]'>
          <div className={`navbar group relative flex justify-between items-center h-[5vh] lg:h-[10vh] w-full z-40 bg-white text-black`}>
            <div className={`${navbar ? 'hidden pointer-events-none' : 'flex pointer-events-auto'} bg-white text-black absolute gap-10 p-[20px] z-50 top-[5vh] lg:top-[10vh] items-start flex-col w-[100%] transition-all duration-500 `}>
              <div className='flex flex-col items-start gap-2'>
                {
                  category &&
                  category.map((item, index) => {
                    return (
                      <Link key={index} to={`/productsbyid/all/${item.id}`}>
                        <div className="cursor-pointer text-[13px] capitalize categ">
                          {item.name}
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
              <div className='flex flex-col items-start gap-2'>
                <div className='text-[12px] flex items-center'>
                  <img src='/img/az.svg' className='w-[14px] inline-block mr-2' />
                  <div>Azerbaijan (AZN)</div>
                </div>
                <div onClick={() => showCanvas('0')} className={`w-[100%] text-[12px] cursor-pointer capitalize text-ellipsis text-nowrap`}>sign in/register</div>
              </div>
            </div>
            <div className="flex items-center w-[33.3%] pl-[5px] lg:pl-0">
              <div>
                <div className='flex lg:hidden gap-3 items-center'>
                  <BsList onClick={() => setNavbar(!navbar)} className='text-[13px] font-bold hamburger' />
                  <SlMagnifier onClick={() => showSearch('0')} className=" text-[11px]" />
                </div>
              </div>
              <div className="gap-4 pl-[20px] items-center hidden lg:flex w-[100%]">
                {
                  category &&
                  category.map((item, index) => {
                    return (
                      <Link key={index} to={`/productsbyid/all/${item.id}`}>
                        <div className="text-[12px] capitalize text-ellipsis text-nowrap categ">
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
                <img className={`invert w-[130px] lg:w-[200px] `} src="/img/theory.png" alt="Theory Logo" />
              </Link>
            </div>
            <div className="flex items-center gap-4 w-[33.3%] justify-end pr-[20px]">
              <div className="hidden lg:flex items-center">
                <SlMagnifier className=" text-[10px]" />
                <p onClick={() => showSearch('0')} className=" text-[12px] cursor-pointer">
                  Search
                </p>
              </div>
              <div className="sign text-[12px] h-full capitalize hidden lg:block cursor-pointer">
                Sign in/register
                <div className="signdrop absolute shadow-lg flex-col gap-3 z-50 top-[5vh] lg:top-[6vh] right-[120px] pb-[20px] pt-[35px] px-[20px] text-black bg-white">
                  <input type='text' className='w-[170px]  text-[12px] px-[5px] py-[2px] border border-[#AFAFAF]' placeholder='Email address' />
                  <input type='password' className='w-[170px]  text-[12px] px-[5px] py-[2px] border border-[#AFAFAF]' placeholder='Password' />
                  <div className='flex items-center gap-2'>
                    <input type='checkbox' />
                    <p className='capitalize text-[12px]'>remember me</p>
                  </div>
                  <button className='w-[170px] text-center text-[12px] bg-black border border-black text-white uppercase py-[5px]'>sign in</button>
                  <p className='text-[12px] text-black underline capitalize text-center cursor-pointer'>forget password?</p>
                  <p className='text-[12px] text-black uppercase text-center'>or</p>
                  <button onClick={() => showCanvas('0')} className='w-[170px] text-center text-[12px] bg-black border border-black text-white uppercase py-[5px]'>register</button>
                </div>
              </div>
              <Link to="/wishlist">
                <div className=" text-[12px] hidden lg:block">
                  Wishlist
                </div>
              </Link>
              <Link to="/wishlist">
                <div className=" text-[12px] block lg:hidden">
                  <FaHeart />
                </div>
              </Link>
              <div className="relative">
                <Link to="/basket">
                  <BsBasket3Fill className=" hover:text-black text-[12px]" />
                </Link>
                <div className="absolute text-[12px] top-[-10px] right-[-10px] ">{sebet.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header