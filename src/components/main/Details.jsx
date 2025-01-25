import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DATA } from '../../context/DataContext'
import { getProductById } from '../../services/api'
import toast, { Toaster } from 'react-hot-toast'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { IoIosStarOutline} from 'react-icons/io'
import { BASKET } from '../../context/BasketContext'
import Loader from './Loader'
import { Helmet } from 'react-helmet'

export default function Details() {
    const { addToBasket } = useContext(BASKET)
    const { removeProduct } = useContext(BASKET)
    const { sebet } = useContext(BASKET)
    const { wish } = useContext(DATA)
    const { totalAllAmount } = useContext(BASKET)
    const { addToWishlist } = useContext(DATA)
    const { removeWish } = useContext(DATA)
    const { probyid, setProById } = useContext(DATA)
    const { proid } = useParams()
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [swipercolor, setSwiperColor] = useState(null)
    const [fixed, setFixed] = useState()
    const [canvas, setCanvas] = useState("-100")
    const [productColor, setProductColor] = useState('')
    const [sizeButton, setSizeButton] = useState('')

    const notifyColor = () => toast.error('Please choose color')
    const notifySize = () => toast.error('Please choose size')

    const checkId = probyid && wish?.find((item) => item.id === probyid.id)

    // console.log(totalAllAmount)

    // console.log(proid)
    // console.log(probyid)

    useEffect(() => {
        if (proid) {
            getProductById(proid)
                .then(res => setProById(res))
        }

    }, [proid])

    function showCanvas(right) {
        setCanvas(right)
    }

    onscroll = function () {
        if (window.scrollY >= 0) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>{probyid?.name}</title>
            </Helmet>
            <div className="relative overflow-hidden">
                <Toaster position="top-right" reverseOrder={false} />
                {canvas === '0' && (
                    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => showCanvas('-100')}></div>
                )}
                {
                    !probyid ? <Loader /> : ''
                }
                <div className='m-[20px] flex flex-col md:flex-row items-center md:items-start justify-between'>
                    <div className={`w-[100%] md:w-[60%] lg:w-[40%] xl:w-[30%] z-50 ${fixed ? 'fixed' : 'absolute'} ${canvas === '0' ? 'right-[0px]' : 'right-[-100%]'} bg-white top-0 flex flex-col transition-all overflow-scroll duration-700 h-[100vh] noscroll p-[20px]`}>
                        <div className='flex justify-between items-center'>
                            <p></p>
                            <p className='capitalize text-[24px] my-[20px]'>shopping bag</p>
                            <p onClick={() => showCanvas('-100')} className='inline-block text-[20px] cursor-pointer'>X</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <b className='text-[16px] capitalize'>your items</b>
                            {sebet.length === 0 ?
                                <div className='h-[200px] flex justify-center items-center'>
                                    <p className=''>Your shopping bag is empty</p>
                                </div>
                                : sebet && sebet.map((item, i) => (
                                    <div key={i} className="flex bg-transparent gap-3 items-start">
                                        <div className='w-[170px] h-[200px]'>
                                            <img src={item.img[0]} className='w-[100%] h-[100%]' />
                                        </div>
                                        <div className='w-[50%] xs:w-[65%] text-[10px] xs:text-[14px] h-[200px] flex flex-col items-start gap-1'>
                                            <p className="text-[#212529] text-start overflow-hidden font-semibold">
                                                {item.name}
                                            </p>
                                            <div className='text-[#212529] flex flex-col gap-3'>
                                                <b>Color: {item.color}</b>
                                            </div>
                                            <p className='text-[#212529] text-start'><b>Size:</b> {item.size}</p>
                                            <p className='text-[#212529] text-start'><b>Quantity:</b>{item.count}</p>
                                            <div className='flex items-center gap-2'>
                                                <del className='text-black'>
                                                    {(item.price).toFixed(2)} $
                                                </del>
                                                <p className='text-black'>
                                                    {(item.totalPrice).toFixed(2)} $
                                                </p>
                                            </div>
                                            <p className='text-red-600 capitalize'>
                                                {item.discount}$ off applied
                                            </p>
                                            <button onClick={() => removeProduct(item.id, item.size, item.color)} className='capitalize'><u>remove</u></button>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className=' flex items-center justify-between'>
                                <p className='text-black fon-bold'>
                                    Items: {sebet.length}
                                </p>
                                <p className='text-black'>
                                    Total: {totalAllAmount.toFixed(2)} $
                                </p>
                            </div>
                            <div className='flex flex-col items-center gap-3 w-[100%]'>
                                <Link to="/checkout" className='w-[100%]'>
                                    <button className='w-full py-[10px] text-[13px] text-white bg-black uppercase border border-black'>go to checkout</button>
                                </Link>
                                <Link to="/basket" className='w-[100%]'>
                                    <button className='w-full py-[10px] text-[13px] text-black bg-white uppercase border border-black'>go to shopping bag</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start md:flex-row w-[100%] md:w-[48%]'>
                        <Swiper
                            direction='vertical'
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper1 w-[7%] transition-all duration-1000 h-0 md:h-[200px] lg:h-[300px]"
                        >
                            {
                                probyid && probyid.images.map((image, i) => (
                                    <SwiperSlide key={i} onClick={() => setSwiperColor(i)}>
                                        <img
                                            className={`w-[100%] object-cover mb-2 ${swipercolor === i ? 'border border-black' : 'border-none'}`}
                                            src={image}
                                            alt={probyid.name}
                                        />
                                    </SwiperSlide>
                                ))
                            }

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
                            className="mySwiper2 w-[100%] md:w-[85%] transition-all duration-1000 h-full"
                        >
                            {
                                probyid && probyid.images.map((image, id) => (
                                    <SwiperSlide key={id}>
                                        <img
                                            className="w-[100%] object-cover"
                                            src={image}
                                            alt={probyid.name}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className='flex flex-col items-start w-[100%] md:w-[48%] my-[10px]'>
                        {probyid && (
                            <div className="flex flex-col bg-transparent gap-3 items-start justify-start">
                                <p className="#212529 text-start text-[17px] md:text-[24px] overflow-hidden font-semibold">
                                    {probyid.name}
                                </p>
                                <div className='flex items-center gap-2'>
                                    <del className='text-black text-[16px]'>
                                        {(probyid.price).toFixed(2)} $
                                    </del>
                                    <p className='text-black text-[16px]'>
                                        {(probyid.price - probyid.discount).toFixed(2)} $
                                    </p>
                                </div>
                                <p className='text-red-600 text-[16px] capitalize'>
                                    {probyid.discount}$ off applied
                                </p>
                                <div className='flex flex-col sm:flex-row gap-3 items-center'>
                                    <div className='flex gap-1'>
                                        {Array(5).fill(null).map((_, id) => (
                                            <IoIosStarOutline key={id} className='text-[17px]' />
                                        ))}
                                    </div>
                                    <div className='font-semibold underline pl-[5px] cursor-pointer'>Write a review</div>
                                </div>
                                <div className='flex flex-col gap-3 items-start mt-[40px]'>
                                    <div>
                                        <b>Color: {productColor}</b>
                                    </div>
                                    <div className="flex gap-2">
                                        {probyid.Colors.map((elem, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setProductColor(elem)}
                                            >
                                                <div
                                                    style={{ backgroundColor: elem }}
                                                    className={`${productColor === elem ? "border-2" : "border"} w-[20px] h-[20px] border border-black rounded-full`}
                                                >
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-col mt-[40px]'>
                                    <p className='text-[16px] font-semibold'>Size</p>
                                    <div className='my-[40px] flex flex-wrap gap-2'>
                                        {
                                            probyid?.Size.map((size, i) => (
                                                <button
                                                    onClick={() => setSizeButton(size)}
                                                    key={i}
                                                    className={`${sizeButton === size ? 'border-black' : 'border-[#eee]'} w-[100px] border-2 border-[#eee] text-black bg-transparent text-ellipsis text-nowrap uppercase py-[5px]`}>{size}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>
                        )}
                        <div className={`flex w-[100%] flex-col gap-2 items-start`}>
                            <button
                                onClick={(e) => {
                                    if (!productColor) {
                                        notifyColor()
                                        return
                                    }
                                    if (!sizeButton) {
                                        notifySize()
                                        return
                                    }
                                    e.preventDefault()
                                    showCanvas('0')
                                    addToBasket(probyid.id, probyid.images, probyid.name, probyid.price, probyid.discount, sizeButton, productColor, probyid.count, probyid.totalPrice)
                                }}
                                className={`${probyid ? 'block' : 'hidden'}  border-2 w-[100%] md:w-[80%] text-[13px] border-[#000] text-white bg-black  uppercase py-[15px]`}>Add to bag</button>
                            {!checkId ? (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        addToWishlist(
                                            probyid.id,
                                            probyid.images,
                                            probyid.name,
                                            probyid.price,
                                            probyid.discount
                                        )
                                    }}
                                    className={`${probyid ? 'block' : 'hidden'} border-2 flex w-[100%] md:w-[80%] text-[13px] border-[#eee] text-black bg-transparent justify-center items-center uppercase py-[15px]`}
                                >
                                    Add to wishlist
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        removeWish(probyid.id)
                                    }}
                                    className={`${probyid ? 'block' : 'hidden'} border-2 w-[100%] md:w-[80%] text-ellipsis text-nowrap text-[13px] border-[#eee] text-black bg-transparent uppercase px-[5px] py-[15px]`}
                                >
                                    Remove from wishlist
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}