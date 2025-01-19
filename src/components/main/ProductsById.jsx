import React, { useContext, useEffect, useState } from 'react'
import { DATA } from '../../context/DataContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import LittleLoad from './LittleLoad'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import { Helmet } from 'react-helmet'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { getProductsByCategory } from '../../services/api'


function ProductsById() {
    const { data, probycatid, setProByCatId, category } = useContext(DATA)
    const { categid } = useParams()
    const [fixed, setFixed] = useState()
    const [view, setView] = useState('285')
    const [canvas, setCanvas] = useState('-280')
    const [dropdownSize, setDropdownSize] = useState(true)
    const [dropdownColor, setDropdownColor] = useState(true)
    const [dropdownPrice, setDropdownPrice] = useState(true)
    const [buttonColor, setButtonColor] = useState(true)
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const [oddColors, setOddColors] = useState([])
    const [oddSize, setOddSize] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    const [selectedColors, setSelectedColors] = useState([])

    const [value, setValue] = useState([0, 10000])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)

    // useEffect(() => {
    //     const handlePopState = () => {
    //         navigate("/shopnow", { replace: true })
    //     }

    //     window.addEventListener("popstate", handlePopState)

    //     return () => {
    //         window.removeEventListener("popstate", handlePopState)
    //     }
    // }, [navigate])

    useEffect(() => {
        if (data?.data?.data) {
            const allColors = data.data.data.flatMap(item => item.Colors)
            const oddcolor = [...new Set(allColors.flat())]
            setOddColors(oddcolor)

            const allSize = data.data.data.flatMap(item => item.Size)
            const oddsize = [...new Set(allSize.flat())]
            setOddSize(oddsize)
        }
    }, [data])

    
    useEffect(() => {
        if (categid) {
            getProductsByCategory(categid)
                .then(res => setProByCatId(res))
        }

    }, [categid])

    const changeWidth = (width) => {
        setView(width)
    }

    const showCanvas = (left) => {
        setCanvas(left)
    }

    onscroll = function () {
        if (window.scrollY >= 100) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    // console.log(probycatid)

    const valuetext = (value) => {
        return `${value} $`
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
        setMinPrice(newValue[0])
        setMaxPrice(newValue[1])
    }

    const handlePageChange = (direction) => {
        const totalPages = probycatid?.data?.meta?.totalPages || 1
        let newPage = page

        if (direction === 'prev') {
            newPage = Math.max(page - 1, 1) 
        } else if (direction === 'next') {
            newPage = Math.min(page + 1, totalPages) 
        }

        setPage(newPage)
        updateURL(newPage) 
    }

    useEffect(() => {
        if (categid) {
            fetchFilteredProducts() 
        }
    }, [categid, selectedSizes, selectedColors, page, minPrice, maxPrice]) 

    const handleCheckboxChange = (e, filterType) => {
        const { value, checked } = e.target

        if (filterType === "size") {
            const newSizes = checked
                ? [...selectedSizes, value]
                : selectedSizes.filter((item) => item !== value)

            setSelectedSizes(newSizes)
            updateURL(page, newSizes, selectedColors)
        } else if (filterType === "color") {
            const newColors = checked
                ? [...selectedColors, value]
                : selectedColors.filter((item) => item !== value)

            setSelectedColors(newColors)
            updateURL(page, selectedSizes, newColors)
        }
    }

    const fetchFilteredProducts = () => {
        const sizeQuery = selectedSizes.join(",")
        const colorQuery = selectedColors.join(",")
        const priceQuery = `minPrice=${minPrice}&maxPrice=${maxPrice}` 
        const limit = 10

        const queryParams = `page=${page}&limit=${limit}${colorQuery ? `&color=${colorQuery}` : ''}${sizeQuery ? `&size=${sizeQuery}` : ''}&${priceQuery}`

        getProductsByCategory(`${categid}`, queryParams)
            .then(res => {
                setProByCatId(res) 
            })
            .catch(error => {
                console.error("Dramaaaa", error) 
            })
    }

    const updateURL = () => {
        const sizeQuery = selectedSizes.length ? `size=${selectedSizes.join(",")}` : ''
        const colorQuery = selectedColors.length ? `color=${selectedColors.join(",")}` : ''
        let queryParams = [sizeQuery, colorQuery].filter(Boolean).join('&')

        if (minPrice !== 0 || maxPrice !== 10000) {
            const priceQuery = `minPrice=${minPrice}&maxPrice=${maxPrice}`
            queryParams += queryParams ? `&${priceQuery}` : priceQuery
        }

        navigate(`/productsbyid/all/${categid}?page=${page}${queryParams ? `&${queryParams}` : ''}`)
    }

    useEffect(() => {
        updateURL(page)
    }, [selectedSizes, selectedColors, page, minPrice, maxPrice]) 

    return (
        <>
            <Helmet>
                <title>Women's Clothing</title>
            </Helmet>
            <div className='relative'>
                <div className='flex flex-col gap-4 m-[25px]'>
                    <h1 className='text-black text-[20px] sm:text-[34px] capitalize trade-gothic tracking-wider'>women's clothing</h1>
                    <p className='text-[13px] text-[#212529]'>Cyber Monday: Up to 40% Off Sitewide + Extra 10%*</p>
                </div>
                <div className='noscroll overflow-scroll md:overflow-visible mb-[25px] mx-[22px] flex items-center gap-2'>
                    {
                        category && category.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    navigate(`/productsbyid/all/${item.id}?page=${page}`)
                                    setButtonColor(item.id)
                                    getProductsByCategory(item.id, `page=${page}`)
                                        .then(res => setProByCatId(res))
                                }}
                                className={`capitalize text-nowrap border border-black px-[10px] py-[5px] bg-transparent ${buttonColor === item.id ? 'border-2' : 'border'}`}
                            >
                                {item.name}
                            </button>
                        ))
                    }
                </div>
                <div className='flex flex-col mx-[20px] justify-between'>
                    <div className={`z-40 ${fixed ? 'fixed top-0' : 'absolute'} ${canvas === '0' ? 'left-[0px]' : 'left-[-280px]'} bg-white flex flex-col h-[100vh] p-[10px]`}>
                        <p onClick={() => showCanvas('-280')} className='uppercase inline-block text-[14px] cursor-pointer text-start'>close</p>
                        <div className='flex flex-col'>
                            <p className='capitalize text-center text-[24px] my-[20px]'>filter by</p>
                            <hr className='w-[260px] h-[1px] bg-[#D9D9D9]' />
                            <div onClick={() => setDropdownSize(!dropdownSize)} className="flex my-[10px] justify-between items-center cursor-pointer">
                                <p className="text-[13px]">Size</p>
                                <p className={`${dropdownSize ? 'block' : 'hidden'} text-[20px]`}>+</p>
                                <p className={`${dropdownSize ? 'hidden' : 'block'} text-[20px]`}>-</p>
                            </div>
                            <div className={`${dropdownSize ? 'hidden' : 'block'} flex flex-col gap-1 py-[10px]`}>
                                {oddSize.map((size, i) => (
                                    <label key={i} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            value={size}
                                            checked={selectedSizes.includes(size)}
                                            onChange={(e) => handleCheckboxChange(e, "size")}
                                        />
                                        {size}
                                    </label>
                                ))}
                            </div>
                            <hr className="w-[260px] h-[1px] bg-[#D9D9D9]" />

                            <div onClick={() => setDropdownColor(!dropdownColor)} className="flex my-[10px] justify-between items-center cursor-pointer">
                                <p className="text-[13px]">Color</p>
                                <p className={`${dropdownColor ? 'block' : 'hidden'} text-[20px]`}>+</p>
                                <p className={`${dropdownColor ? 'hidden' : 'block'} text-[20px]`}>-</p>
                            </div>
                            <div className={`${dropdownColor ? 'hidden' : 'block'} flex flex-col gap-1 py-[10px]`}>
                                {oddColors.map((color, i) => (
                                    <label key={i} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            value={color}
                                            checked={selectedColors.includes(color)}
                                            onChange={(e) => handleCheckboxChange(e, "color")}
                                        />
                                        {color}
                                    </label>
                                ))}
                            </div>
                            <hr className="w-[260px] h-[1px] bg-[#D9D9D9]" />
                            <div onClick={() => setDropdownPrice(!dropdownPrice)} className="flex my-[10px] justify-between items-center cursor-pointer">
                                <p className="text-[13px]">Price</p>
                                <p className={`${dropdownPrice ? 'block' : 'hidden'} text-[20px]`}>+</p>
                                <p className={`${dropdownPrice ? 'hidden' : 'block'} text-[20px]`}>-</p>
                            </div>
                            <div className={`${dropdownPrice ? 'hidden' : 'block'} flex justify-center`}>
                                <Box sx={{ width: 235 }}>
                                    <Slider
                                        getAriaLabel={() => 'Price range'}
                                        value={value}
                                        min={0}
                                        max={10000}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 items-start justify-between w-full'>
                        <div onClick={() => showCanvas('0')} className='flex gap-2 items-center cursor-pointer'>
                            <img className='w-[30px]' src='https://theory.a.bigcontent.io/v1/static/filter' />
                            <p className='uppercase text-[14px]'>filter</p>
                        </div>
                        <div className='hidden md:flex gap-3 items-center'>
                            <p className='uppercase text-[14px]'>view:</p>
                            <div onClick={() => changeWidth('285')} className='cursor-pointer flex items-center gap-1'>
                                {Array(5).fill(null).map((_, id) => (
                                    <div
                                        key={id}
                                        className={`w-[12px] h-[12px] pr-[10px] border rounded-sm border-black ${view === '285' ? 'bg-black' : 'bg-white'}`}
                                    ></div>
                                ))}
                            </div>
                            <div onClick={() => changeWidth('730')} className='cursor-pointer flex items-center gap-1'>
                                {Array(2).fill(null).map((_, id) => (
                                    <div
                                        key={id}
                                        className={`w-[12px] h-[12px] border rounded-sm border-black ${view === '730' ? 'bg-black' : 'bg-white'}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-wrap gap-3 justify-evenly xxl:justify-start mx-[20px] my-[30px] ${view === '730' ? '' : ''}`}>
                    {!probycatid ? (
                        <LittleLoad />
                    ) : probycatid.data?.data?.length === 0 ? (
                        <div className='flex h-[200px] w-full px-[40%] items-center text-[30px] text-black'>No products found!</div>
                    ) : (
                        probycatid.data?.data?.map((item, i) => (
                            <Link key={i} to={`/details/${item.id}`}>
                                <div
                                    className={`procard flex flex-col gap-2 w-[150px] h-full ${view === "285" ? "sm:w-[285px]" : "sm:w-[730px]"} bg-white items-start justify-start`}
                                >
                                    <Swiper
                                        navigation={true}
                                        modules={[Navigation]}
                                        className={`productsSwiper ${view === '285' ? 'sm:h-[400px]' : 'sm:h-full'} w-full`}
                                    >
                                        {item.images.slice(0, 4).map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    className="w-full object-cover mb-2"
                                                    src={image}
                                                    alt={item.name}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="flex flex-col items-start">
                                        <div>
                                            <p className="text-black text-start text-wrap sm:overflow-hidden sm:text-ellipsis sm:text-nowrap text-[12px] px-[10px] pb-[10px] font-semibold">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <del className="text-black text-[13px] pl-[10px] pb-[10px]">
                                                {item.price.toFixed(2)} $
                                            </del>
                                            <p className="text-black text-[13px] pl-[10px] pb-[10px]">
                                                {(item.price - item.discount).toFixed(2)} $
                                            </p>
                                        </div>
                                        <p className="text-red-600 text-[13px] pl-[10px] pb-[10px] capitalize">
                                            {item.discount}$ off applied
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
                <div className={`flex items-center gap-3 justify-center text-black text-[14px] mb-[30px]`}>
                    <div
                        className='cursor-pointer'
                        onClick={() => handlePageChange('prev')}
                    >
                        <MdNavigateBefore />
                    </div>
                    <div className='flex items-center gap-3'>
                        {
                            probycatid && probycatid.data?.meta && Array.from({ length: probycatid.data.meta.totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`px-2 py-1 rounded ${page === i + 1 ? 'border border-black' : 'bg-gray-200 text-black'}`}
                                    onClick={() => setPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))
                        }
                    </div>
                    <div
                        className='cursor-pointer'
                        onClick={() => handlePageChange('next')}
                    >
                        <MdNavigateNext />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsById