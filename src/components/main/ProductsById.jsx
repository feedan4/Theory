import React, { useContext, useEffect, useState } from 'react'
import { DATA } from '../../context/DataContext'
import { useNavigate, useParams } from 'react-router-dom'
import { getCategoryById, getProductsByCategory } from '../../services/api'
import { FaRegSquare } from 'react-icons/fa'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

function ProductsById() {
    const { data } = useContext(DATA)
    const { products } = useContext(DATA)
    const { catname, catid } = useParams()
    const [categorybyid, setCategoryById] = useState(null)
    const { probycat } = useContext(DATA)
    const [filterData, setFilterData] = useState(null)
    const [fixed, setFixed] = useState()
    const [view, setView] = useState('285')
    const [canvas, setCanvas] = useState('-280')
    const [dropdownSize, setDropdownSize] = useState(true)
    const [dropdownColor, setDropdownColor] = useState(true)
    const [dropdownPrice, setDropdownPrice] = useState(true)
    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    // console.log(catid);

    // console.log(data);


    function pageUrl(page) {
        navigate(`/productsbyid/${catname}/${catid}?page=${page}&limit=10`)
    }

    useEffect(() => {
        pageUrl(page)
    }, [page])

    useEffect(() => {
        if (catid) {
            getCategoryById(catid)
                .then(res => setCategoryById(res))
        }

    }, [catid, catname])

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

    // function filterBySub(id) {
    //     if (!products) return
    //     if (id === 'all') {
    //         const viewAll = products.filter(item => item.category?.id == catid);
    //         setFilterData(viewAll);
    //     } else {
    //         const filterSubProducts = products.filter(item => item.subcategoryId == id);
    //         setFilterData(filterSubProducts);
    //     }
    // }


    return (
        <div className='relative'>
            <div className='flex flex-col gap-4 m-[25px]'>
                <h1 className='text-black text-[20px] sm:text-[34px] capitalize trade-gothic tracking-wider'>{catname}'s view all</h1>
                <p className='text-[13px] text-[#212529]'>Cyber Monday: Up to 40% Off Sitewide + Extra 10%*</p>
                <div className='flex gap-4 overflow-x-scroll md:overflow-visible noscroll '>
                    <button
                        onClick={() => { filterBySub('all') }}
                        className='border-2 border-[#eee] text-black bg-transparent text-ellipsis text-nowrap uppercase mt-[20px] px-[10px] py-[5px]'>
                        view all
                    </button>

                    {
                        categorybyid &&
                        categorybyid.Subcategory?.map((subItem, i) => (
                            <button
                                key={i}
                                onClick={() => { filterBySub(subItem.id) }}
                                className='border-2 border-[#eee] text-black bg-transparent text-ellipsis text-nowrap uppercase mt-[20px] px-[10px] py-[5px]'>{subItem.name}</button>
                        ))
                    }
                </div>
            </div>
            <div className='flex mx-[20px] justify-between'>
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
                        <div className={`${dropdownSize ? 'hidden' : 'block'}`}>
                            <div className='flex items-center gap-2'>

                            </div>
                        </div>
                        <hr className="w-[260px] h-[1px] bg-[#D9D9D9]" />

                        <div onClick={() => setDropdownColor(!dropdownColor)} className="flex my-[10px] justify-between items-center cursor-pointer">
                            <p className="text-[13px]">Color</p>
                            <p className={`${dropdownColor ? 'block' : 'hidden'} text-[20px]`}>+</p>
                            <p className={`${dropdownColor ? 'hidden' : 'block'} text-[20px]`}>-</p>
                        </div>
                        <div className={`${dropdownColor ? 'hidden' : 'block'}`}>
                            {
                                products?.map((item, index) => (
                                    item.Colors?.map((color, i) => (
                                        <p key={i}>{color}</p>
                                    ))
                                ))
                            }
                        </div>
                        <hr className="w-[260px] h-[1px] bg-[#D9D9D9]" />
                        <div onClick={() => setDropdownPrice(!dropdownPrice)} className="flex my-[10px] justify-between items-center cursor-pointer">
                            <p className="text-[13px]">Price</p>
                            <p className={`${dropdownPrice ? 'block' : 'hidden'} text-[20px]`}>+</p>
                            <p className={`${dropdownPrice ? 'hidden' : 'block'} text-[20px]`}>-</p>
                        </div>
                        <div className={`${dropdownPrice ? 'hidden' : 'block'}`}>

                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div onClick={() => showCanvas('0')} className='flex gap-2 items-center cursor-pointer'>
                        <img className='w-[30px]' src='https://theory.a.bigcontent.io/v1/static/filter' />
                        <p className='uppercase text-[14px]'>filter</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <p className='uppercase text-[14px]'>view:</p>
                        <div onClick={() => changeWidth('285')} className='flex items-center cursor-pointer'>
                            <FaRegSquare className='w-[15px]' />
                            <FaRegSquare className='w-[15px]' />
                            <FaRegSquare className='w-[15px]' />
                            <FaRegSquare className='w-[15px]' />
                            <FaRegSquare className='w-[15px]' />
                        </div>
                        <div onClick={() => changeWidth('730')} className='flex items-center cursor-pointer'>
                            <FaRegSquare className='w-[15px]' />
                            <FaRegSquare className='w-[15px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-wrap gap-3 justify-evenly xxl:justify-start mx-[20px] my-[30px] ${view === '730' ? '' : ''}`}>
                {
                    filterData
                        ? filterData.map((filter, i) => (
                            <div key={i} className={`procard flex flex-col h-full ${view === '285' ? 'w-[285px]' : 'w-[730px]'} bg-white items-start justify-start`}>
                                <img
                                    className="w-full object-cover mb-2"
                                    src={filter.images[0]}
                                    alt={filter.name}
                                />
                                <div className='flex flex-col items-start'>
                                    <div>
                                        <p className="text-black text-start overflow-hidden text-ellipsis text-nowrap text-[14px] px-[10px] pb-[10px] font-semibold">
                                            {filter.name}
                                        </p>
                                    </div>
                                    <div className='flex items-center'>
                                        <del className='text-black text-[14px] pl-[10px] pb-[10px]'>
                                            {(filter.price).toFixed(2)} man
                                        </del>
                                        <p className='text-black text-[14px] pl-[10px] pb-[10px]'>
                                            {((filter.price * (100 - filter.discount)) / 100).toFixed(2)} man
                                        </p>
                                    </div>
                                    <p className='text-red-600 text-[14px] pl-[10px] pb-[10px] capitalize'>{filter.discount}% off applied</p>
                                </div>
                            </div>
                        ))

                        : products &&
                        products
                            .filter(item => item.category?.id == catid)
                            .map((filter, i) => (
                                <div key={i} className={`procard flex flex-col h-full ${view === '285' ? 'w-[285px]' : 'w-[730px]'} bg-white items-start justify-start`}>
                                    <img
                                        className="w-full object-cover mb-2"
                                        src={filter.images[0]}
                                        alt={filter.name}
                                    />
                                    <div className='flex flex-col items-start'>
                                        <div>
                                            <p className="text-black text-start overflow-hidden text-ellipsis text-nowrap text-[14px] px-[10px] pb-[10px] font-semibold">
                                                {filter.name}
                                            </p>
                                        </div>
                                        <div className='flex items-center'>
                                            <del className='text-black text-[14px] pl-[10px] pb-[10px]'>
                                                {(filter.price).toFixed(2)} man
                                            </del>
                                            <p className='text-black text-[14px] pl-[10px] pb-[10px]'>
                                                {((filter.price * (100 - filter.discount)) / 100).toFixed(2)} man
                                            </p>
                                        </div>
                                        <p className='text-red-600 text-[14px] pl-[10px] pb-[10px] capitalize'>{filter.discount}% off applied</p>
                                    </div>
                                </div>
                            ))
                }

            </div>
            <div className='flex items-center gap-3 justify-center text-black text-[14px] mb-[30px]'>
                <div
                    className='cursor-pointer'
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                >
                    <MdNavigateBefore />
                </div>
                <div className='flex items-center gap-3'>
                    {
                        probycat && probycat.meta && Array.from({ length: probycat.meta.totalPages }).map((_, i) => (
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
                    onClick={() => setPage(prev => Math.min(prev + 1, probycat?.meta?.totalPages || 1))}
                >
                    <MdNavigateNext />
                </div>
            </div>
        </div>
    )
}

export default ProductsById