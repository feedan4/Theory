import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Link, useParams } from 'react-router-dom';
import { getCategoryById } from '../../services/api';

export default function ShopNow() {
    const [categorybyid, setCategoryById] = useState(null)
    const { catname, catid } = useParams()
    // console.log(catname, catid);

    const categImages = [
        "https://ak-media.theory.com/i/theory/01TOP?$mediaDesktop$",
        "https://ak-media.theory.com/i/theory/01PANT?$mediaDesktop$",
        "https://ak-media.theory.com/i/theory/01SWEATERS?$mediaDesktop$",
        "https://ak-media.theory.com/i/theory/01OUTERWEAR?$mediaDesktop$"
    ]
    // console.log(categImages);


    useEffect(() => {
        getCategoryById(catid)
            .then(res => setCategoryById(res))
    }, [catid, catname])
    console.log(categorybyid);

    return (
        <>
            <div className='w-[80%] mx-auto bg-white'>
                <div className='py-[20px]'>
                    <h1 className='capitalize text-center text-black font-bold text-[30px] trade-gothic my-[20px]'>the women's shop</h1>
                    <Swiper navigation={true} modules={[Navigation]} className="h-[370px] sm:h-[500px] md:h-[670px] transition-all duration-1000">
                        <SwiperSlide
                            style={{ backgroundImage: `url(https://ak-media.theory.com/i/theory/110224WCASHMERESHOPGENDERO?$mediaDesktopLarge$) ` }}
                        >
                            <div className='z-10 h-[100%] flex flex-col justify-center items-center text-white'>
                                <h1 className='text-[20px] sm:text-[26px] capitalize trade-gothic font-bold '>the cashmere shop</h1>
                                <p className='text-[14px] sm:[16px] text-center'>Comfort unlike any other—sweaters and accessories to hold close all winter long.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            style={{ backgroundImage: `url(https://ak-media.theory.com/i/theory/110224WGIFTGUIDEHEROGENDERPAGE?$mediaDesktopLarge$)` }}
                        >
                            <div className='z-10 h-[100%] flex flex-col justify-center items-center text-white'>
                                <h1 className='text-[20px] sm:text-[26px] capitalize trade-gothic font-bold '>the gift guide</h1>
                                <p className='text-[14px] sm:[16px] text-center'>Curated with care for everyone on your list.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='flex flex-col items-center justify-between my-[40px]'>
                    <div>
                        <h1 className='text-[26px] capitalize trade-gothic font-semibold'>show by category</h1>
                    </div>
                    <div className='w-full h-full my-[30px]'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation]}
                            touchRatio={1}
                            scrollbar={{ draggable: true }}
                            direction="horizontal"
                            breakpoints={{
                                400: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            className="h-full w-full"
                        >
                            {

                                categorybyid &&
                                categorybyid.Subcategory?.map((subItem, index) => (
                                    <SwiperSlide key={index}>
                                        <Link to={`/productsbyid`}>
                                            <div className="flex flex-col bg-white items-start justify-start">
                                                {categImages[index] && (
                                                    <img
                                                        className="w-full h-[200px] object-cover mb-2"
                                                        src={categImages[index]}
                                                        alt={subItem.name}
                                                    />
                                                )}
                                                <p className="text-black text-start text-[14px] px-[10px] tracking-wider pb-[10px]">
                                                    {subItem.name}
                                                </p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>

                                ))


                            }
                        </Swiper>
                    </div>
                    <Link to={`/productsbyid`}>
                        <button className='border border-black text-black bg-transparent uppercase w-[200px] py-[8px]'>show all women</button>
                    </Link>
                </div>

            </div>
        </>
    );
}