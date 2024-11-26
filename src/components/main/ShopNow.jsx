import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import ProductSlider from './ProductSlider';

export default function ShopNow() {
    return (
        <>
            <div className='w-[80%] mx-auto bg-white'>
                <div className='py-[20px]'>
                    <h1 className='capitalize text-center text-black font-bold text-[30px] font-archivo tracking-wider my-[20px]'>the women's shop</h1>
                    <Swiper navigation={true} modules={[Navigation]} className="h-[670px]">
                        <SwiperSlide
                            style={{ backgroundImage: `url(https://ak-media.theory.com/i/theory/110224WCASHMERESHOPGENDERO?$mediaDesktopLarge$)` }}
                        >
                            <div className='z-10 h-[100%] flex flex-col justify-center items-center text-white'>
                                <h1 className='text-[26px] capitalize font-archivo tracking-wider font-bold '>the cashmere shop</h1>
                                <p className='text-[16px] '>Comfort unlike any other—sweaters and accessories to hold close all winter long.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            style={{ backgroundImage: `url(https://ak-media.theory.com/i/theory/110224WGIFTGUIDEHEROGENDERPAGE?$mediaDesktopLarge$)` }}
                        >
                            <div className='z-10 h-[100%] flex flex-col justify-center items-center text-white'>
                                <h1 className='text-[26px] capitalize font-archivo tracking-wider font-bold '>the gift guide</h1>
                                <p className='text-[16px]'>Curated with care for everyone on your list.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='flex items-center justify-between my-[40px]'>
                    <div className='flex flex-col justify-evenly h-[400px]'>
                        <h1 className='text-[26px] capitalize font-archivo tracking-wider font-semibold  '>show by <br />category</h1>
                        <button className='border border-black text-black bg-transparent uppercase w-[200px] py-[8px]'>show all women</button>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    );
}