import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { DATA } from '../../context/DataContext';

export default function ShopNow() {
    const { category, setCategory } = useContext(DATA)

    const categImagesWomen = [
        "https://static.zara.net/assets/public/524f/06fc/61324c80a9e0/74a79c470554/03067210800-p/03067210800-p.jpg?ts=1733851345445&w=374",
        "https://static.zara.net/assets/public/0705/a1c6/83e245a599e4/74e1c032b9dc/00518266800-a1/00518266800-a1.jpg?ts=1729201548211&w=908",
        "https://static.zara.net/assets/public/784f/7f1a/5cf24e078dd0/d160686f2a97/01255556606-16-p/01255556606-16-p.jpg?ts=1734350709810&w=888",
        "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw59f1eb16/images/CGD99A019-M.jpg?sw=400&sfrm=jpeg",
        "https://static.zara.net/assets/public/8044/4e9e/59164e69b598/09a7770d3349/04424811800-15-p/04424811800-15-p.jpg?ts=1734350710627&w=888",
        "https://static.zara.net/assets/public/31d2/eda4/db284538a7e2/eb68b2a87111/08862319712-p/08862319712-p.jpg?ts=1725614016391&w=888"
    ]

    return (
        <>
            <div className='w-[90%] md:w-[80%] mx-auto bg-white'>
                <div className='py-[20px]'>
                    <h1 className='text-center capitalize text-black font-bold text-[30px] trade-gothic my-[20px]'>women's Shop</h1>
                    <Swiper
                        loop={true} 
                        autoplay={{
                            delay: 3000, 
                            disableOnInteraction: false, 
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="h-[370px] sm:h-[500px] md:h-[670px] transition-all duration-1000 shopSwiper">
                        <SwiperSlide
                            style={{ backgroundImage: `url(https://ak-media.theory.com/i/theory/110224WGIFTGUIDEHEROGENDERPAGE?$mediaDesktopLarge$)` }}
                        >
                            <div className='z-10 h-[100%] flex flex-col justify-center items-center text-white'>
                                <h1 className='text-[20px] sm:text-[26px] capitalize trade-gothic font-bold '>the gift guide</h1>
                                <p className='text-[14px] sm:[16px] text-center'>Curated with care for everyone on your list.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            style={{ backgroundImage: `url(https://ak-media.theory.com/i/theory/1118-W-Cashmere-Shop-m?$mediaDesktop$)`, backgroundPosition: "center" }}
                        >
                            <div className='z-10 h-[100%] flex flex-col justify-center items-center text-white'>
                                <h1 className='text-[20px] sm:text-[26px] capitalize trade-gothic font-bold '>the cashmere shop</h1>
                                <p className='text-[14px] sm:[16px] text-center'>Comfort unlike any other—sweaters and accessories to hold close all winter long.</p>
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
                                300: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            className="shopswiper h-full w-full"
                        >
                            {

                                category &&
                                category.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <Link to={`/productsbyid/all/${item.id}`}>
                                            <div className="flex flex-col bg-white items-start justify-start">
                                                <img
                                                    className="w-full h-[200px] object-cover mb-2"
                                                    src={categImagesWomen[i]}
                                                    alt={item.name}
                                                />
                                                <p className="text-black text-start capitalize text-[14px] px-[10px] pb-[10px]">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>

            </div >
        </>
    );
}