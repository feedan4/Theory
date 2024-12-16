import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../../context/DataContext';
import { getProductById } from '../../services/api';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Details() {
    const { probyid, setProById } = useContext(DATA)
    const { proid } = useParams()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // console.log(probyid);

    useEffect(() => {
        if (proid) {
            getProductById(proid)
                .then(res => setProById(res))
        }
    }, [proid])

    return (
        <>
            <div className='m-[20px] flex items-start justify-between'>
                <div className='flex gap-3 w-[50%]'>
                    <Swiper
                        direction='vertical'
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper1 w-[10%] h-[300px]"
                    >
                        <SwiperSlide>
                            {
                                probyid && Object.values(probyid).map((item, i) => (
                                    <img
                                        key={i}
                                        className="w-full object-cover mb-2"
                                        src={item.images}
                                        alt={item.name}
                                    />
                                ))
                            }
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 w-[90%]"
                    >
                        {
                            probyid && Object.values(probyid).map((item, i) => (
                                <img
                                    key={i}
                                    className="w-full object-cover mb-2"
                                    src={item.images}
                                    alt={item.name}
                                />
                            ))
                        }
                    </Swiper>
                </div>
            </div>


            {/* {
                probyid && Object.values(probyid).map((item, i) => (
                    <div key={i} className={`flex flex-col h-full bg-white items-start justify-start`}>
                        <img
                            className="w-full object-cover mb-2"
                            src={item.images[0]}
                            alt={item.name}
                        />
                        <div className='flex flex-col items-start'>
                            <div>
                                <p className="text-black text-start overflow-hidden text-ellipsis text-nowrap text-[14px] px-[10px] pb-[10px] font-semibold">
                                    {item?.name}
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <del className='text-black text-[14px] pl-[10px] pb-[10px]'>{(item?.price).toFixed(2)} $</del>
                                <p className='text-black text-[14px] pl-[10px] pb-[10px]'>
                                    {((item?.price * (100 - item?.discount)) / 100).toFixed(2)} $
                                </p>
                            </div>
                            <p className='text-red-600 text-[14px] pl-[10px] pb-[10px] capitalize'>
                                {item?.discount}% off applied
                            </p>
                        </div>
                    </div>
                ))
            } */}
        </>
    )
}