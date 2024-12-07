import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <div className='w-full h-[70vh] bg-cover bg-center bg-white flex flex-col gap-3 items-center justify-center py-[30px] trade-gothic tracking-wider'
        style={{ backgroundImage: `url("https://i1.adis.ws/i/theory/ABOUT_US_HERO")` }}
      >
        <h1 className='text-white text-center text-[26x] sm:text-[50px] capitalize trade-gothic tracking-wider'>about theory</h1>
        <div className='flex gap-4 text-white text-[20px]'>
          <a href="#origin">Origin</a>|
          <a href="#philosophy">Philosophy</a>|
          <a href="#future">Future </a>
        </div>
      </div>
      <div id='origin' className='w-[65%] my-[60px] flex flex-col lg:flex-row  gap-10 items-center mx-auto'>
        <img className='w-[100%] lg:w-[50%]' src='https://cdn.media.amplience.net/i/theory/0329-aboutusrectangle11desktop' />
        <div className='flex flex-col items-center lg:items-start gap-2 text-[#212529]'>
          <h2 className='text-[50px]'>01</h2>
          <p className='text-[32px]'>Origin</p>
          <p className='text-[14px]'>Twenty-five years ago, a pair of pants changed the way American women dress. Recognizing the need for clothes that felt great and fit perfectly, we developed an innovative stretch fabric that would dramatically improve a pant’s performance. These pants had the power to make women feel confident, smart, and stylish. Never before had American sportswear been so easy to wear to work and everywhere else.</p>
          <p className='text-[14px]'>When Theory for men was established, similar foundation principles were used, so that they, too, could get dressed in innovative, highly functional, and stylish clothes.</p>
          <i className='text-[14px]'>Watch award-winning filmmakers Jun Diaz and N + N Films's tribute to our 20-year history, New York City heritage, and vision for the future.</i>
        </div>
      </div>
      <div id='philosophy' className='w-[90%] lg:w-[90%] flex flex-col mx-auto '>
        <img className='h-[537px]' src='https://cdn.media.amplience.net/i/theory/0329-aboutusimage1desktop' />
        <div className='flex flex-col items-center lg:items-start gap-2 text-[#212529]'>
          <h2 className='text-[50px]'>02</h2>
          <p className='text-[32px]'>Philosophy</p>
          <p className='text-[14px]'>Twenty-five years ago, a pair of pants changed the way American women dress. Recognizing the need for clothes that felt great and fit perfectly, we developed an innovative stretch fabric that would dramatically improve a pant’s performance. These pants had the power to make women feel confident, smart, and stylish. Never before had American sportswear been so easy to wear to work and everywhere else.</p>
          <p className='text-[14px]'>When Theory for men was established, similar foundation principles were used, so that they, too, could get dressed in innovative, highly functional, and stylish clothes.</p>
          <i className='text-[14px]'>Watch award-winning filmmakers Jun Diaz and N + N Films's tribute to our 20-year history, New York City heritage, and vision for the future.</i>
        </div>
      </div>
    </>
  )
}

export default AboutUs