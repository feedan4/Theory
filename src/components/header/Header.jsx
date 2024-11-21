import React, { useContext, useEffect } from 'react'
import { DATA } from '../../context/DataContext'
import { Link } from 'react-router-dom'
import { SlMagnifier } from 'react-icons/sl'
import { BsBasket3Fill } from 'react-icons/bs'

function Header() {
  const { category } = useContext(DATA)

  return (
    <div className='px-[20px] py-[10px] bg-black flex justify-between items-center'>
      <div className='flex items-center'>
        <ul className='flex gap-4 items-center'>
          {
            category && category.map((item, index) => {
              return (
                <li key={item.id} className='text-white text-[13px]'>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <img src='/img/theory.png' />
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex items-center'>
          <SlMagnifier className='text-white text-[11px]'/>
          <a href='#' className='text-white text-[13px]'>Search</a>
        </div>
        <a href='#' className='text-white text-[13px] capitalize'>Sign in/register</a>
        <a href='#' className='text-white text-[13px]'>Search</a>
        <a href='#' className='text-white text-[13px]'>Wishlist</a>
        <div className='relative '>
          <BsBasket3Fill className='text-white hover:text-black text-[13px]' />
          <div className='absolute text-[13px]'>0</div>
        </div>
      </div>
    </div>

  )
}

export default Header