import React from 'react'
import { Link } from 'react-router-dom';

function Main() {
  
  return (
    <main className='w-full flex flex-col items-center'>
      <div className="w-full flex items-center h-[240px] transition-all duration-1000 sm:h-[340px] mq700:h-[500px] md:h-[640px]">
        <div
          className="bg-center bg-cover w-[100%] h-[240px] transition-all duration-1000 sm:h-[340px] mq700:h-[500px] md:h-[640px] z-30 flex flex-col gap-4 justify-center items-center"
          style={{
            backgroundImage: `url('https://ak-media.theory.com/i/theory/080224-W-Wardrobe-Hero-banner-dt?$mediaDesktopLarge$')`,
          }}
        >
          <h1 className='capitalize text-white text-center text-[20px] mq662:text-[34px] font-bold trade-gothic'>the women's shop</h1>
        </div>
      </div>
      <div className='w-full h-[70vh] bg-cover bg-center flex flex-col gap-3 items-center justify-center py-[30px] trade-gothic tracking-wider'
        style={{ backgroundImage: `url("https://ak-media.theory.com/i/theory/1101-hp-gg-desktop?$mediaDesktopLarge$")` }}
      >
        <h1 className='text-white text-center text-[26px] sm:text-[34px] capitalize trade-gothic tracking-wider font-bold '>the gift guide</h1>
        <p className='text-white text-[16px] text-center'>Curated with care for everyone on your list.</p>
      </div>
      <div className='w-full bg-cover bg-center flex flex-col gap-3 items-center justify-center py-[30px] trade-gothic tracking-wider'
        style={{ backgroundImage: `url("https://ak-media.theory.com/i/theory/InTheory-Mobile?$mediaDesktop$")` }}>
        <h1 className='text-white text-[20px] sm:text-[34px] trade-gothic tracking-wider font-bold '>#InTheory</h1>
        <p className='text-white text-[16px] text-center'>The season's best, styled by our staff.</p>
        <Link to={`/aboutus`}>
          <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>about us</button>
        </Link>
      </div>
    </main>

  )
}

export default Main