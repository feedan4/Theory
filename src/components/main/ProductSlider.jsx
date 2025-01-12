import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { DATA } from '../../context/DataContext';
import { Link } from 'react-router-dom';

export default function ProductSlider() {
  const { data } = useContext(DATA)

  return (
    <div className='w-[95%] mx-auto pb-[30px] bg-[#fff]'>
      <h1 className='text-black text-[20px] sm:text-[34px] font-bold px-[20px] py-[30px]'>Discover More</h1>
      <div className='p-[20px] w-full transition-all duration-1000'>
        <Swiper
          loop={true} 
          autoplay={{
            delay: 1000, 
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          // centeredSlides={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          touchRatio={1}
          scrollbar={{ draggable: true }}
          direction="horizontal"
          breakpoints={{
            400: {
              slidesPerView: 3, // For mobile
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4, // For tablets
            },
            1024: {
              slidesPerView: 5, // For larger screens
            },
            1200: {
              slidesPerView: 6, // For larger screens
            },
          }}
          className="orderSwiper"
        >

          {data && data.data?.data?.map((item) => (
            <SwiperSlide key={item.id} className='cursor-pointer'>
              <Link to={`/details/${item.id}`}>
                <div className="flex flex-col bg-[#E6E1E3] items-start w-full h-full justify-start">
                  <img
                    className="w-full object-cover mb-2"
                    src={item.images[0]}
                    alt={item.name}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>

  )
}