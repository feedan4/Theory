import React, { useContext } from 'react'
import { DATA } from '../../context/DataContext'

function Header() {

  const {category, setCategory} = useContext(DATA)
  

  return (
    <div className='m-[20px] bg-transparent hover:bg-white delay-300 flex justify-between items-center'>
        <div className='flex items-center'>
          {
            
          }
        </div>
        <div></div>
        <div></div>
    </div>

  )
}

export default Header