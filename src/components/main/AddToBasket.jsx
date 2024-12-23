import React, { useContext, useState } from 'react'
import { BASKET } from '../../context/BasketContext'
import { Link, useLocation } from 'react-router-dom'

function AddToBasket() {
    const { sebet } = useContext(BASKET)
    const { removeProduct } = useContext(BASKET)
    const { totalAllAmount } = useContext(BASKET)

    return (
        <>
            <div className='w-[90%] md:w-[67%] flex flex-col items-center mx-auto py-[30px] bg-white'>
                <h3 className='text-[20px] md:text-[32px] text-center md:text-start font-bold capitalize'>shopping bag</h3>
                <div className='w-[100%] flex flex-col gap-3 md:flex-row justify-between my-[30px] items-start'>
                    <div className='md:w-[58%] w-[100%] flex flex-col gap-3'>
                        <hr className='border-none bg-black h-[1px]' />
                        <p className='text-[20px] font-bold'>Ship to Me</p>
                        <div className='flex flex-col gap-4'>
                            <div className={`w-full ${sebet.length === 0 ? 'block' : 'hidden'} my-[50px] text-center`}>
                                Your shopping bag is empty
                            </div>
                            {
                                sebet && sebet.map((item, i) => (
                                    <div key={i} className="flex bg-transparent gap-3 items-start">
                                        <div className='w-[120px] sm:w-[160px] h-[160px] sm:h-[200px]'>
                                            <img src={item.img[0]} className='w-[100%] h-[100%]' />
                                        </div>
                                        <div className='text-[10px] xs:text-[14px] h-[200px] flex flex-col items-start gap-1'>
                                            <p className="#212529 text-start overflow-hidden font-semibold">
                                                {item.name}
                                            </p>
                                            <p className='#212529 text-start'><b>Color: {item.color}</b></p>
                                            <p className='#212529 text-start'><b>Size: {item.size}</b></p>
                                            <div className='flex items-center gap-2'>
                                                <del className='text-black'>
                                                    {(item.price).toFixed(2)} $
                                                </del>
                                                <p className='text-black'>
                                                    {(item.totalPrice).toFixed(2)} $
                                                </p>
                                            </div>
                                            <p className='text-red-600 capitalize'>
                                                {item.discount}% off applied
                                            </p>
                                            <div className='flex gap-3 justify-end font-bold  items-center'>
                                                {/* <button className='capitalize border-none'><u>edit</u></button> */}
                                                <button onClick={() => removeProduct(item.id, item.size, item.color)} className='capitalize border-none'><u>remove</u></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[40%] flex flex-col gap-3'>
                        <hr className='border-none bg-black h-[1px]' />
                        <p className='text-[20px] capitalize font-bold'>order summary</p>
                        <div className='flex items-center justify-between'>
                            <p className='capitalize text-[13px]'>sub total</p>
                            <p className='capitalize text-[13px]'>{totalAllAmount.toFixed(2)} $</p>
                        </div>
                        <hr className='border-none bg-gray-400  h-[1px]' />
                        <div className='flex items-center justify-between'>
                            <p className='capitalize font-bold text-[15px]'>estimated total</p>
                            <p className='capitalize font-bold text-[15px]'>{totalAllAmount.toFixed(2)} $</p>
                        </div>
                        <div className='flex flex-col gap-3 mt-[20px]'>
                            <p className='text-[12px] capitalize font-bold'>promo code</p>
                            <div className='flex justify-between items-center'>
                                <input type='text' placeholder='promo code' className='border border-black w-[75%] text-gray-500 capitalize text-[11px] p-[8px]' />
                                <button className='w-[24%] py-[8px] text-white uppercase border border-black text-[11px] font-bold text-center bg-black'>apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/checkout" className='w-[100%]'>
                    <button className='w-[100%] py-[10px] text-white uppercase border border-black text-[14px] font-bold text-center bg-black'>continue to checkout</button>
                </Link>
            </div>
        </>
    )
}

export default AddToBasket