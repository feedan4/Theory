import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { DATA } from '../../context/DataContext';

export default function ProductSlider() {
  const { data } = useContext(DATA)
  console.log(data);


  return (
    <div className='w-full pb-[30px] bg-[#dadada]'>
      <h1 className='text-black text-[20px] sm:text-[34px] font-bold trade-gothic tracking-wider px-[20px] py-[30px]'>Women's Essential</h1>
      <div className='p-[20px] w-full transition-all duration-1000'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          touchRatio={1}
          scrollbar={{ draggable: true }}
          direction="horizontal"
          breakpoints={{
            400: {
              slidesPerView: 2, // For mobile
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // For tablets
            },
            1024: {
              slidesPerView: 4, // For larger screens
            },
          }}
          className="mySwiper h-[400px]"
        >

          {data &&
            data
              .filter(item => item.category?.name === "Women")
              .map(filteredItem => (
                <SwiperSlide key={filteredItem.id}>
                  <div className="flex flex-col bg-[#E6E1E3] items-start justify-start">
                    <img
                      className="w-full h-[200px] object-cover mb-2"
                      src={filteredItem.images[0]}
                      alt={filteredItem.name}
                    />
                    <p className="text-black text-start text-[14px] px-[10px] pb-[10px] font-semibold">
                      {filteredItem.name}
                    </p>
                    <div className='flex flex-col items-start'>
                      <div className='flex items-center'>
                        <del className='text-black text-[14px] pl-[10px] pb-[10px]'>
                          {(filteredItem.price).toFixed(2)} man
                        </del>
                        <p className='text-black text-[14px] pl-[10px] pb-[10px]'>
                          {((filteredItem.price * (100 - filteredItem.discount)) / 100).toFixed(2)} man
                        </p>
                      </div>
                      <p className='text-red-600 text-[14px] pl-[10px] pb-[10px] capitalize'>{filteredItem.discount}% off applied</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

        </Swiper>
      </div>
    </div>

  )
}