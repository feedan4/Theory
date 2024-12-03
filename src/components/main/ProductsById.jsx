import React, { useContext, useEffect, useState } from 'react'
import { DATA } from '../../context/DataContext'
import { useParams } from 'react-router-dom'
import { getCategoryById } from '../../services/api'
import { FaRegSquare } from 'react-icons/fa'

function ProductsById() {
    const { data } = useContext(DATA)
    const { catname, catid } = useParams()
    const [categorybyid, setCategoryById] = useState(null)
    const [filterData, setFilterData] = useState(null)
    const [view, setView] = useState('285')

    useEffect(() => {
        if (catid) {
            getCategoryById(catid)
                .then(res => setCategoryById(res))
        }
    }, [catid, catname])
    // console.log(categorybyid);

    const changeWidth = (width) => {
        setView(width)
    }

    function filterBySub(id) {
        if (data) {
            const filterSubProducts = data.filter(item => item.subcategoryId == id);
            setFilterData(filterSubProducts);
        }
    }

    return (
        <>
            <div className='flex flex-col gap-4 m-[25px]'>
                <h1 className='text-black text-[20px] sm:text-[34px] capitalize trade-gothic tracking-wider'>{catname}'s view all</h1>
                <p className='text-[13px] text-[#212529]'>Cyber Monday: Up to 40% Off Sitewide + Extra 10%*</p>
                <div className='flex gap-4 overflow-x-scroll md:overflow-visible noscroll '>
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
                <div className='flex gap-2 items-center'>
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
                        : data &&
                        data
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
        </>
    )
}

export default ProductsById