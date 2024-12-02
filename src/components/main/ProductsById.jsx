import React, { useContext, useEffect, useState } from 'react'
import { DATA } from '../../context/DataContext'
import { useParams } from 'react-router-dom'
import { getCategoryById } from '../../services/api'

function ProductsById() {
    const { data } = useContext(DATA)
    const { catname, catid, subname, subid } = useParams()
    const [categorybyid, setCategoryById] = useState(null)
    console.log(catname, catid);


    useEffect(() => {
        if (catid) {
            getCategoryById(catid)
                .then(res => setCategoryById(res))
        }
    }, [catid, catname])
    // console.log(categorybyid);

    return (
        <>
            <div className='flex flex-wrap items-center gap-3 justify-center my-[30px]'>
                {
                    data &&
                    data
                        .filter(item => item.category?.id == catid)
                        .map(filteredItem => (
                            <div className="flex flex-col h-full w-[285px] bg-white items-start justify-start">
                                <img
                                    className="w-full object-cover mb-2"
                                    src={filteredItem.images[0]}
                                    alt={filteredItem.name}
                                />
                                <div className='flex flex-col items-start'>
                                    <div>
                                        <p className="text-black text-start overflow-hidden text-ellipsis text-nowrap text-[14px] px-[10px] pb-[10px] font-semibold">
                                            {filteredItem.name}
                                        </p>
                                    </div>
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

                        ))
                }
            </div>
        </>
    )
}

export default ProductsById