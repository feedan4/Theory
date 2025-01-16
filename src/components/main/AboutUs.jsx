import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

function AboutUs() {

  // const navigate = useNavigate()

  // useEffect(() => {
  //   const handlePopState = () => {
  //     navigate("/", { replace: true });
  //   }

  //   window.addEventListener("popstate", handlePopState);

  //   return () => {
  //     window.removeEventListener("popstate", handlePopState);
  //   }
  // }, [navigate])

  return (
    <>
    <Helmet>
      <title>About Us</title>
    </Helmet>
      <div className='w-full h-[70vh] bg-cover bg-center bg-white flex flex-col gap-3 items-center justify-center py-[30px] trade-gothic tracking-wider'
        style={{ backgroundImage: `url("https://i1.adis.ws/i/theory/ABOUT_US_HERO")` }}
      >
        <h1 className='text-white text-center text-[26px] sm:text-[50px] capitalize trade-gothic tracking-wider'>about theory</h1>
        <div className='hidden sm:flex gap-4 text-white text-[20px]'>
          <a href="#origin">Origin</a>|
          <a href="#philosophy">Philosophy</a>|
          <a href="#future">Future </a>
        </div>
        <div className='flex sm:hidden flex-col gap-2 text-white text-[20px]'>
          <a className='underline' href="#origin">Origin</a>
          <a className='underline' href="#philosophy">Philosophy</a>
          <a className='underline' href="#future">Future </a>
        </div>
      </div>
      <div className='mt-[60px] flex flex-col gap-5 items-center mx-auto'>
        <div id='origin' className='flex flex-col lg:flex-row w-[90%] lg:w-[65%] gap-10 items-center text-[#212529]'>
          <img className='w-[90%] lg:w-[50%]' src='https://cdn.media.amplience.net/i/theory/0329-aboutusrectangle11desktop' />
          <div className='flex flex-col w-[90%] items-center text-center lg:text-start lg:items-start'>
            <p className='text-[50px]'>01</p>
            <p className='text-[32px]'>Origin</p>
            <p className='text-[14px]'>Twenty-five years ago, a pair of pants changed the way American women dress. Recognizing the need for clothes that felt great and fit perfectly, we developed an innovative stretch fabric that would dramatically improve a pant’s performance. These pants had the power to make women feel confident, smart, and stylish. Never before had American sportswear been so easy to wear to work and everywhere else.</p>
            <p className='text-[14px]'>When Theory for men was established, similar foundation principles were used, so that they, too, could get dressed in innovative, highly functional, and stylish clothes.</p>
            <i className='text-[14px]'>Watch award-winning filmmakers Jun Diaz and N + N Films's tribute to our 20-year history, New York City heritage, and vision for the future.</i>
          </div>
        </div>
        <img className='w-[90%] max-h-[537px] my-[30px]' src='https://cdn.media.amplience.net/i/theory/0329-aboutusimage1desktop' />
      </div>
      <div className='w-[90%] lg:w-[90%] flex flex-col mx-auto'>
        <div id='philosophy' className='w-[90%] lg:w-[40%] mx-auto flex flex-col items-center lg:items-start justify-center text-[#212529]'>
          <p className='text-[50px]'>02</p>
          <p className='text-[32px]'>Philosophy</p>
          <p className='text-[14px] text-center lg:text-start'>We believe cool, expertly tailored pieces made from the best materials have the power to change the way we feel, improve the way we work, and inspire the way we live.</p>
        </div>
        <div className='flex mx-auto my-[30px] w-[90%] lg:w-[80%] items-center justify-between flex-nowrap'>
          <img className='w-[33%]' src='https://cdn.media.amplience.net/i/theory/0329-aboutusrectangle3desktop' />
          <img className='w-[33%]' src='https://cdn.media.amplience.net/i/theory/aboutusrectangle15desktop' />
          <img className='w-[33%]' src='https://cdn.media.amplience.net/i/theory/0329-aboutusrectangle2desktopupdated' />
        </div>
      </div>
      <div id='future' className=' flex items-center justify-center future w-[100%] lg:w-[90%] my-[20px] mx-auto text-white'>
        <div className='w-[80%] lg:w-[30%] flex flex-col items-center'>
          <p className='text-[50px]'>03</p>
          <p className='text-[32px] capitalize'>theory for good</p>
          <p className='text-[14px] text-center'>We are committed to making a positive impact on the people who wear our clothes, our industry, and our planet, beginning with our Good fabrics.</p>
        </div>
      </div>
    </>
  )
}

export default AboutUs