import React, { useContext, useState } from 'react'
import { BASKET } from '../../context/BasketContext'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function AddToBasket() {
    const { sebet } = useContext(BASKET)
    const { removeProduct } = useContext(BASKET)
    const { totalAllAmount } = useContext(BASKET)
    const { countOption, setcountOption } = useContext(BASKET)
    const { newOptionCount } = useContext(BASKET)

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <div className='w-[90%] xl:w-[75%] flex flex-col items-center mx-auto py-[30px] bg-white'>
                <h3 className='text-[20px] md:text-[32px] text-center md:text-start font-bold capitalize'>shopping bag</h3>
                <div className='w-[100%] flex flex-col gap-3 lg:flex-row justify-between my-[30px] items-start'>
                    <div className='lg:w-[58%] w-[100%] flex flex-col gap-3'>
                        <hr className='border-none bg-black h-[1px]' />
                        <p className='text-[20px] font-bold'>Ship to Me</p>
                        <div className='flex flex-col gap-4'>
                            <div className={`w-full ${sebet.length === 0 ? 'block' : 'hidden'} my-[50px] text-center`}>
                                Your shopping bag is empty
                            </div>
                            <div className='flex flex-col text-center gap-3'>
                                <div className={`${sebet.length === 0 ? 'hidden' : 'md:flex'} items-center hidden`}>
                                    <div className='w-[15%] capitalize font-bold text-nowrap text-[16px]'>order summary</div>
                                    <div className='w-[40%]'></div>
                                    <div className='w-[15%] capitalize font-bold text-[16px]'>quantity</div>
                                    <div className='w-[15%] capitalize font-bold text-[16px]'>price</div>
                                    <div className='w-[15%] capitalize font-bold text-[16px]'>total</div>
                                </div>
                                <hr className={`w-full ${sebet.length === 0 ? 'hidden' : 'flex'} h-[1px] border-none bg-[#B9B9B9]`} />
                                {
                                    sebet && sebet.map((item, i) => (
                                        <Link
                                            key={i} to={`/details/${item.id}`}>
                                            <div className='flex px-[10px] gap-4 items-start md:items-center'>
                                                <img className='max-w-[80px] max-h-[110px]' src={`${item.img[0]}`} />
                                                <div className='w-[80%] md:w-[40%] text-start'>
                                                    <p className='text-[12px] lg:text-[14px]'>{item.name}</p>
                                                    <p className='text-[12px] text-nowrap lg:text-[13px]'>Size: {item.size}</p>
                                                    <p className='text-[12px] text-nowrap lg:text-[13px]'>Color: {item.color}</p>
                                                    <p
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            removeProduct(item.id, item.size, item.color);
                                                        }}
                                                        className="capitalize font-bold cursor-pointer underline">
                                                        remove
                                                    </p>
                                                </div>
                                                <div className='w-[12%] md:w-[9%]' onClick={(e) => e.preventDefault()}>
                                                    <select
                                                        value={item.count}
                                                        onChange={(e) => {
                                                            const newCount = parseInt(e.target.value, 10)
                                                            setcountOption(newCount)
                                                            newOptionCount(item.id, item.size, item.color, newCount)
                                                        }}
                                                        className='border border-black w-full py-[2px] px-[5px] capitalize font-bold text-[13px]'
                                                    >
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>
                                                <div className='w-[15%] capitalize font-bold hidden md:block text-[13px]'>{item.price - item.discount} $</div>
                                                <div className='w-[15%] text-nowrap capitalize font-bold text-[13px]'>{item.totalPrice} $</div>
                                            </div>
                                        </Link>
                                    ))
                                }
                                <hr className='w-full h-[1px] border-none bg-[#B9B9B9]' />
                                <div className='px-[10px] font-bold text-end'><span className='pr-[30px]'>Items total:</span> {totalAllAmount.toFixed(2)} $</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] lg:w-[40%] flex flex-col gap-3'>
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
            </div >
        </>
    )
}

export default AddToBasket