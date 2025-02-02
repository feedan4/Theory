import React, { useContext } from 'react'
import { DATA } from '../../context/DataContext'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Wishlist() {
    const { wish } = useContext(DATA)
    const { removeWish } = useContext(DATA)

    return (
        <>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <div className='flex flex-col gap-5 bmd:flex-row w-[90%] bmd:w-[80%] mx-auto my-[30px] items-start'>
                <ul type="none" className='w-[100%] bmd:w-[300px] capitalize text-nowrap text-[13px] gap-4 flex flex-row bmd:flex-col overflow-scroll noscroll items-start'>
                    <li className='text-[14px] text-black font-bold hidden bmd:block'>Hi, Fidan</li>
                    <hr className='h-[1px] w-[50%] bg-[#c8c7c7] border-none hidden bmd:block' />
                    <li>myTheory</li>
                    <li>orders & returns</li>
                    <li>profile information</li>
                    <li className='underline'>wishlist</li>
                    <li>address book</li>
                    <li>payment methods</li>
                    <li>customer services</li>
                    <hr className='h-[1px] w-[50%] bg-[#c8c7c7] border-none hidden bmd:block' />
                    <li>sign out</li>
                </ul>
                <div className={`w-full ${wish.length === 0 ? 'flex flex-col items-center' : 'block'}`}>
                    <h3 className="text-[24px] text-[#212529] font-bold text-center">Wishlist</h3>
                    <div className="flex flex-wrap gap-3 justify-evenly xxl:justify-start mx-[20px] my-[30px]">
                        {
                            wish && wish.map((item, i) => (
                                <Link key={i} to={`/details/${item.id}`}>
                                    <div className={`relative w-[285px] flex flex-col h-full bg-white items-start justify-start`}>
                                        <FaHeart onClick={() => removeWish(item.id)} className="w-[20px] h-[20px] absolute top-3 right-4 cursor-pointer" />
                                        <img
                                            className="w-full h-[380px] object-cover mb-2"
                                            src={item.img && item.img[0]}
                                            alt={item.name}
                                        />
                                        <div className='flex flex-col items-start'>
                                            <div>
                                                <p className="text-black text-start overflow-hidden text-ellipsis text-nowrap text-[14px] px-[10px] pb-[10px] font-semibold">
                                                    {item.name}
                                                </p>
                                            </div>
                                            <div className='flex items-center'>
                                                <del className='text-black text-[14px] pl-[10px] pb-[10px]'>
                                                    {(item.price).toFixed(2)} $
                                                </del>
                                                <p className='text-black text-[14px] pl-[10px] pb-[10px]'>
                                                    {(item.price - item.discount).toFixed(2)} $
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                        <div className={`${wish.length === 0 ? 'block' : 'hidden'} text-[13px] text-black`}>
                            You have no items in your wishlist yet
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist