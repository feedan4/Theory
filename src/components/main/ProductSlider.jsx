import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Navigation, Pagination } from 'swiper/modules';
import { DATA } from '../../context/DataContext';

export default function ProductSlider() {
  const { data } = useContext(DATA)
  console.log(data);


  return (
    <div className='w-full pb-[30px]'>
      <h1 className='text-black text-[20px] sm:text-[34px] font-bold font-archivo tracking-wider px-[20px] py-[30px]'>Women's Essential</h1>
      <div className='px-[20px] w-full h-[400px]'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          // centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[400px]"
        >

          {data &&
            data
              .filter(
                item => item.category?.name === "Women"
              )
              .map(filteredItem => (
                <SwiperSlide key={filteredItem.id}>
                  <img
                    className="bg-center bg-cover"
                    src={filteredItem.images[0]}
                    alt={filteredItem.name}
                  />
                  <div>
                    <p className="text-black text-[13px]">{filteredItem.name}</p>
                  </div>
                </SwiperSlide>
              ))}

        </Swiper>
      </div>
    </div>

  )
}