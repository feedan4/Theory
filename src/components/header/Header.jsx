import React, { useContext, useEffect } from 'react'
import { DATA } from '../../context/DataContext'

function Header() {
  const { category } = useContext(DATA)

  return (
    <div className='p-[20px] bg- hover:bg-white delay-300 flex justify-between items-center'>
      <div className='flex items-center'>
        <ul className='flex gap-4 items-center'>
          {
            category && category.map((item, index) => {
              return (
                <li>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
      <div></div>
      <div></div>
    </div>

  )
}

export default Header