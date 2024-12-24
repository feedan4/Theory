import React, { useContext, useState } from 'react'
import { BASKET } from '../../context/BasketContext'

function Checkout() {
    const { sebet } = useContext(BASKET)
    const { totalAllAmount } = useContext(BASKET)
    const [dropdown, setDropdown] = useState(false)
    const [defaultCheck, setDefaultCheck] = useState(true)


    return (
        <div className='mx-auto w-[70%] my-[50px] flex flex-col gap-10'>
            <div className='flex flex-col text-center gap-3'>
                <div className='flex items-center'>
                    <div className='w-[15%] capitalize font-bold text-nowrap text-[16px]'>order summary</div>
                    <div className='w-[40%]'></div>
                    <div className='w-[15%] capitalize font-bold text-[16px]'>quantity</div>
                    <div className='w-[15%] capitalize font-bold text-[16px]'>price</div>
                    <div className='w-[15%] capitalize font-bold text-[16px]'>total</div>
                </div>
                <hr className='w-full h-[1px] border-none bg-[#B9B9B9]' />
                {
                    sebet && sebet.map((item, i) => (
                        <div className='flex px-[10px] gap-4 items-center'>
                            <div className='w-[15%] pl-[30px] capitalize font-bold text-nowrap text-[16px]'>
                                <img className='w-[80px] h-[110px]' src={`${item.img[0]}`} />
                            </div>
                            <div className='w-[40%] text-start'>
                                <p className='text-[16px]'>{item.name}</p>
                                <p className='text-[13px]'>Size: {item.size}</p>
                                <p className='text-[13px]'>Color: {item.color}</p>
                            </div>
                            <div className='w-[15%] capitalize font-bold text-[16px]'>{item.count}</div>
                            <div className='w-[15%] capitalize font-bold text-[16px]'>{item.price} $</div>
                            <div className='w-[15%] capitalize font-bold text-[16px]'>{item.totalPrice} $</div>
                        </div>
                    ))
                }
                <hr className='w-full h-[1px] border-none bg-[#B9B9B9]' />
                <div className='px-[10px] font-bold text-end'>Items total: {totalAllAmount} $</div>
            </div>
            <div className='flex items-start justify-between'>
                <div className='w-[49%] flex flex-col gap-4 pr-[10px] items-start'>
                    <p className='text-[16px] pl-[10px] font-bold capitalize'>billing address</p>
                    <hr className='w-full h-[1px] border-none bg-[#B9B9B9]' />
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>first name *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>last name *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>email *</div>
                        <input type='email' className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>country *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>Address Line 1 *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>Address Line 2 *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>City / Suburb *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>Zip / Postcode *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full px-[10px] flex items-center justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>Mobile Phone *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full pt-[30px] px-[10px] gap-2 flex items-center'>
                        <input type='checkbox' />
                        <div className='text-[12px]'>Sign up to receive special offers and promotions from Borderfree.com.</div>
                    </div>
                </div>
                <div className='w-[49%] flex flex-col gap-4 items-start'>
                    <p className='text-[16px] pl-[10px] font-bold capitalize'>delivery address</p>
                    <hr className='w-full h-[1px] border-none bg-[#B9B9B9]' />
                    <div className='flex gap-2 items-center pl-[10px] pt-[6px]'>
                        <button
                            onClick={() => {
                                setDefaultCheck(true)
                                setDropdown(false)
                            }}
                            className={`${defaultCheck ? 'bg-black' : 'bg-white'} w-[10px] h-[10px] border-2 border-white outline outline-1 outline-black rounded-full`}
                        >
                        </button>
                        <div className='text-[13px]'>Default (same as billing address)</div>
                    </div>
                    <div className='flex gap-2 items-center pl-[10px] pt-[12px]'>
                        <button
                            onClick={() => {
                                setDefaultCheck(false)
                                setDropdown(true)
                            }}
                            className={`${dropdown ? 'bg-black' : 'bg-white'} w-[10px] h-[10px] border-2 border-white outline outline-1 outline-black rounded-full`}
                        >
                        </button>
                        <div className='text-[13px]'>Add an alternative delivery address</div>
                    </div>
                    <div className={`${dropdown ? 'flex' : ''} ${defaultCheck ? "hidden" : ''} flex w-full flex-col gap-4 pl-[10px] pt-[30px] items-start`}>
                        <div className='w-full flex items-center justify-between'>
                            <div className='text-[13px] capitalize w-[30%]'>first name *</div>
                            <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='text-[13px] capitalize w-[30%]'>last name *</div>
                            <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='text-[13px] capitalize w-[30%]'>country *</div>
                            <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='text-[13px] capitalize w-[30%]'>Address Line 1 *</div>
                            <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='text-[13px] capitalize w-[30%]'>Address Line 2 *</div>
                            <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='text-[13px] capitalize w-[30%]'>City / Suburb *</div>
                            <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='text-[13px] capitalize w-[30%]'>Zip / Postcode *</div>
                            <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='text-[13px] capitalize w-[30%]'>Mobile Phone *</div>
                            <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4 pr-[10px] items-start'>
                <p className='text-[16px] pl-[10px] font-bold capitalize'>shipping method</p>
                <hr className='w-full h-[1px] border-none bg-[#B9B9B9]' />
                <div className='flex w-full justify-between items-center'>
                    <div className='flex gap-2 items-center pl-[10px] pt-[6px]'>
                        <button className='bg-black w-[10px] h-[10px] border-2 border-white outline outline-1 outline-black  rounded-full'></button>
                        <div className='text-[13px]'>Free</div>
                    </div>
                    <div className='cursor-pointer'>Express Courier (Air)</div>
                    <div className='cursor-pointer'>5 to 6 business days</div>
                </div>
            </div>
            <div className='flex items-start justify-between'>
                <div className='w-[49%] flex flex-col gap-4 pr-[10px] items-start'>
                    <div className='w-[100%] flex justify-between items-center'>
                        <div className='text-[16px] pl-[10px] font-bold capitalize'>payment</div>
                        <div className='text-[10px] font-bold uppercase'>Secure Encrypted Transaction</div>
                    </div>
                    <hr className='w-full h-[1px] border-none bg-[#B9B9B9]' />
                    <p className='text-[13px] px-[10px]'>Please choose your payment method</p>
                    <div className='w-[100%] flex gap-5 px-[10px] items-center'>
                        <img className='w-[50px] h-[50px] cursor-pointer' src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png'/>
                        <img className='w-[80px] h-[80px] cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/196/196566.png'/>
                        <img className='w-[50px] h-[50px] cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/6124/6124998.png'/>
                    </div>
                    <div className='w-full flex items-center px-[10px] justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>card number *</div>
                        <input className='text-[14px] w-[69%] border border-black p-[5px]' />
                    </div>
                    <div className='w-full flex items-center px-[10px] justify-between'>
                        <div className='text-[13px] capitalize w-[30%]'>expire date *</div>
                        <div className='w-[69%] flex justify-between items-center'>
                            <select className='text-[14px] w-[49%] border border-black p-[5px]' />
                            <select className='text-[14px] w-[49%] border border-black p-[5px]' />
                        </div>
                    </div>
                    <div className='w-full flex items-center px-[10px]'>
                        <div className='text-[13px] capitalize w-[30%]'>security code *</div>
                        <input className='text-[14px] w-[20%] ml-[4px] border border-black p-[5px]' />
                    </div>
                </div>
                <div className='w-[49%] flex flex-col gap-4 items-start'>
                    <p className='text-[16px] pl-[10px] font-bold capitalize'>billing summary</p>
                    <hr className='w-full h-[1px] border-none bg-[#B9B9B9]' />
                    <div className='w-full flex justify-between px-[10px] items-center'>
                        <p className='capitalize text-[14px]'>items total</p>
                        <p className='capitalize text-[14px]'>{totalAllAmount} $</p>
                    </div>
                    <div className='w-full flex justify-between px-[10px] items-center'>
                        <p className='capitalize text-[14px]'>shipping</p>
                        <p className='capitalize text-[14px]'>0.00 $</p>
                    </div>
                    <div className='w-full flex justify-between pt-[10px] px-[10px] items-center'>
                        <p className='capitalize font-bold text-[16px]'>total for your order</p>
                        <p className='capitalize font-bold text-[14px]'>{totalAllAmount} $</p>
                    </div>
                    <p className='text-[13px] px-[10px]'>Local taxes, duties or customs clearance fees may apply</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout