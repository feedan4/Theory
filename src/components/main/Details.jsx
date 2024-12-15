import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../../context/DataContext';
import { getProductById } from '../../services/api';

function Details() {
    const { probyid, setProById } = useContext(DATA)
    const { proid } = useParams()

    console.log(probyid);

    useEffect(() => {
        if (proid) {
            getProductById(proid)
                .then(res => setProById(res))
        }
    }, [proid])

    return (
        <>
            {
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
            }
        </>
    )
}

export default Details