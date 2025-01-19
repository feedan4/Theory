import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DATA } from '../../context/DataContext';

function Main() {
  const { showVideo } = useContext(DATA)

  return (
    <main className='w-full flex flex-col items-center'>
      <div className={`relative bg-transparent flex flex-col w-full justify-around ${showVideo ? 'h-[60vh] sm:h-[80vh] md:h-[100vh]' : 'h-full'}`}>
        <video
          autoPlay
          loop
          muted
          style={{ objectPosition: "center 10%" }}
          className={`absolute top-0 left-0 w-full h-full object-cover ${showVideo ? 'block z-10' : 'hidden'}`}
          src="https://ak-media.theory.com/v/theory/DG_Cashmere_HP_Hero_Desktop/fullhd?protocol=https"
        ></video>
        <div></div>
        <div className={`flex flex-col gap-4 items-center transition-all duration-1000 z-10 ${showVideo ? 'block' : 'hidden'}`}>
          <h1 className='text-white text-[20px] sm:text-[34px] font-bold capitalize'>let's get together</h1>
          <p className='text-white text-[16px] text-center'>Cozy up to a season of celebration.</p>
          <div className='flex gap-3 items-center flex-col sm:flex-row'>
            <Link to={`/shopnow`}>
              <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>shop now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center h-[240px] transition-all duration-1000 sm:h-[340px] mq700:h-[500px] md:h-[640px]">
        <div
          className="bg-center bg-cover w-[100%] h-[240px] transition-all duration-1000 sm:h-[340px] mq700:h-[500px] md:h-[640px] z-30 flex flex-col gap-4 justify-center items-center"
          style={{
            backgroundImage: `url('https://ak-media.theory.com/i/theory/2gv-hp-desktop?$mediaDesktopLarge$')`,
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
      <div className='w-full bg-black flex flex-col gap-3 items-center justify-center px-[10px] py-[50px] trade-gothic tracking-wider'>
        <h1 className='text-white text-[20px] sm:text-[26px] text-center trade-gothic tracking-wider font-bold '>Donate to Support Those Affected by LA Wildfires</h1>
        <p className='text-white text-[11px] text-center'>Together with our sister brands Uniqlo and GU, we will donate $1 million USD worth in relief funds and up to $1 million USD worth of clothing as needed.</p>
        <p className='text-white text-[11px] text-center'>Together we can provide hunger relief to impacted communities. Your donation will offer direct support to the Los Angeles Regional Food Bank and Feeding America®.</p>
        <p className='text-white text-[11px] text-center'>Theory and our parent company Fast Retailing will match donations up to $100,000.*</p>
        <a href='https://teamfeed.feedingamerica.org/index.cfm?fuseaction=donorDrive.event&eventID=651'>
          <button className='text-[11px] outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[130px] py-[8px]'>donate now</button>
        </a>
      </div>
    </main>

  )
}

export default Main