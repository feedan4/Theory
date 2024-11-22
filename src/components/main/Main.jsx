import React from 'react'

function Main() {

  return (
    <main>
      <div className="w-full flex items-center h-[640px]">
        <div
          className="bg-center bg-cover w-[50%] h-[640px] z-30 flex flex-col gap-4 justify-center items-center"
          style={{
            backgroundImage: `url('https://ak-media.theory.com/i/theory/1101-hp-gendertile-w?$mediaDesktopLarge$')`,
          }}
        >
          <h1 className='capitalize text-white text-[34px] font-bold font-archivo tracking-wider'>the women's shop</h1>
          <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>shop now</button>
        </div>
        <div
          className="bg-center bg-cover w-[50%] h-[640px] z-30  flex flex-col gap-4 justify-center items-center"
          style={{
            backgroundImage: `url('https://ak-media.theory.com/i/theory/1101-hp-gendertile-m?$mediaDesktopLarge$')`,
          }}
        >
          <h1 className='capitalize text-white text-[34px] font-bold font-archivo tracking-wider'>the men's shop</h1>
          <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>shop now</button>
        </div>
      </div>
    </main>

  );
}

export default Main