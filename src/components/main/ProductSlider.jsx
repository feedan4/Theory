import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { DATA } from '../../context/DataContext';

export default function ProductSlider() {
    const { data } = useContext(DATA)

  return (
    <div className='flex flex-col p-[20px]'>
        <div>
            <h1 className='text-black text-[20px] sm:text-[34px] font-bold py-[50px]'>Women's Essential</h1>
        </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* {
            data ? data.map(item => (
                <SwiperSlide className='flex flex-col items-center gap-2'>
                    <img src={item.images} alt={item.name}/>                      
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </SwiperSlide>
            ))
          } */}
      </Swiper>
    </div>
  );
}
