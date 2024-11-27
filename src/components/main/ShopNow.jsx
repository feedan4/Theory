import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { DATA } from '../../context/DataContext';

export default function ShopNow() {
    const { category } = useContext(DATA)
    const categImages = [
        "https://ak-media.theory.com/i/theory/01TOP?$mediaDesktop$",
        "https://ak-media.theory.com/i/theory/01PANT?$mediaDesktop$",
        "https://ak-media.theory.com/i/theory/01SWEATERS?$mediaDesktop$",
        "https://ak-media.theory.com/i/theory/01OUTERWEAR?$mediaDesktop$"
    ]

    return (
        <>
            <div className='w-[80%] mx-auto bg-white'>
                <div className='py-[20px]'>
                    <h1 className='capitalize text-center text-black font-bold text-[30px] trade-gothic my-[20px]'>the women's shop</h1>
                    <Swiper navigation={true} modules={[Navigation]} className="h-[670px]">
                        <SwiperSlide
                            style={{ backgroundImage: `url(https://ak-media.theory.com/i/theory/110224WCASHMERESHOPGENDERO?$mediaDesktopLarge$)` }}
                        >
                            <div className='z-10 h-[100%] flex flex-col justify-center items-center text-white'>
                                <h1 className='text-[26px] capitalize trade-gothic font-bold '>the cashmere shop</h1>
                                <p className='text-[16px] '>Comfort unlike any other—sweaters and accessories to hold close all winter long.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            style={{ backgroundImage: `url(https://ak-media.theory.com/i/theory/110224WGIFTGUIDEHEROGENDERPAGE?$mediaDesktopLarge$)` }}
                        >
                            <div className='z-10 h-[100%] flex flex-col justify-center items-center text-white'>
                                <h1 className='text-[26px] capitalize trade-gothic font-bold '>the gift guide</h1>
                                <p className='text-[16px]'>Curated with care for everyone on your list.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='flex flex-col items-center justify-between my-[40px]'>
                    <div>
                        <h1 className='text-[26px] capitalize trade-gothic font-semibold'>show by category</h1>
                    </div>
                    <div className='w-full h-[300px]'>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        400: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="h-[300px] w-full"
                >
                    {category &&
                        category
                            .filter((item) => item.category?.name === "Women")
                            .map((filteredItem) =>
                                filteredItem.Subcategory?.map((subItem, index) => (
                                    <SwiperSlide key={subItem.id}>
                                        jkerfjkegkjgkrgjk
                                        <div className="flex flex-col bg-[#E6E1E3] items-start justify-start">
                                            <img
                                                className="w-full h-[200px] object-cover mb-2"
                                                src={categImages[1]}
                                                alt={subItem.name}
                                            />
                                            <p className="text-black text-start text-[14px] px-[10px] pb-[10px] font-semibold">
                                                {subItem.name}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))
                    
                            )}
                </Swiper>
                    </div>
                    <button className='border border-black text-black bg-transparent uppercase w-[200px] py-[8px]'>show all women</button>
                </div>

            </div>
        </>
    );
}