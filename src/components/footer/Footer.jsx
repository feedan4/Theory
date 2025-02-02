import React, { useState } from 'react'
import { FaFacebookF, FaInstagramSquare, FaPinterestP, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Footer() {

    const [dropdown1, setDropdown1] = useState(true)
    const [dropdown2, setDropdown2] = useState(true)
    const [dropdown3, setDropdown3] = useState(true)

    return (
        <footer className='relative z-30 flex flex-col'>
            <div className='bg-[#FAFAFA] py-[35px]'>
                <div className='w-[80%] sm:w-[55%] lg:w-[80%] xl:w-[55%] mx-auto flex lg:flex-row flex-col justify-center items-center gap-5'>
                    <div className='flex flex-col gap-3 text-center lg:text-start'>
                        <p className='font-archivo tracking-wider text-[16px] text-[#212529]'>Sign Up for 15% Off*</p>
                        <p className='text-[12px] text-[#494949]'>Join our mailing list for our latest updates and enjoy 15% off your first full price order. Learn more about our privacy policy here</p>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-auto'>
                        <input type='text' placeholder='Enter email address' className='w-full lg:w-[277px] px-[10px] h-[40px] text-[13px] border border-[#808080] text-[#000]' />
                        <Link to="/">
                            <button className='bg-[#7D7D7D] font-archivo h-[40px] lg:w-[110px] w-full text-white text-[12px] uppercase border border-[#7D7D7D]'>sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-[100%] mx-auto h-[79%] px-[20px] md:px-[50px] py-[50px] bg-white flex flex-col gap-10 lg:gap-0 lg:flex-row items-center xl:items-start'>
                <div className='w-[100%] xl:w-[80%] flex flex-col xl:flex-row'>
                    <div className='w-full xl:w-[33%] hidden xl:block'>
                        <ul type='none' className='flex flex-col gap-2'>
                            <li className='text-[16px] text-[#212529] tracking-wider font-bold font-archivo'>Customer Care</li>
                            <li className='text-[13px] text-[#3b3b3b]'>My Account</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Track My Order</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Returns & Exchanges</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Shipping & Payments</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Size & Alterations</li>
                            <li className='text-[13px] text-[#3b3b3b]'>FAQs</li>
                        </ul>
                    </div>
                    <div className={`block xl:hidden ${!dropdown1 ? 'border border-[#bebebe] px-[10px] py-[20px]' : 'border-none'}`}>
                        <div className='flex flex-col gap-2'>
                            <div onClick={() => setDropdown1(!dropdown1)} className={`w-full flex items-center justify-between ${dropdown1 ? 'border border-[#bebebe] px-[10px] py-[20px]' : 'border-none'}`}>
                                <div className='text-[14px] text-[#212529] tracking-wider font-bold font-archivo'>
                                    Customer Care
                                </div>
                                <div className={`${dropdown1 ? 'hidden' : 'block'} text-[13px]`}><IoIosArrowDown /></div>
                                <div className={`${dropdown1 ? 'block' : 'hidden'} text-[13px]`}><IoIosArrowUp /></div>
                            </div>
                            <div className={`${dropdown1 ? 'hidden' : 'block'}`}>
                                <ul type='none' className='flex flex-col gap-2'>
                                    <li className='text-[13px] text-[#3b3b3b]'>My Account</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>Track My Order</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>Returns & Exchanges</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>Shipping & Payments</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>Size & Alterations</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>FAQs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[33%] hidden xl:block'>
                        <ul type='none' className='flex flex-col gap-2'>
                            <li className='text-[16px] text-[#212529] tracking-wider font-bold font-archivo'>About Us</li>
                            <Link to={`/aboutus`}>
                                <li className='text-[13px] text-[#3b3b3b]'>About Us</li>
                            </Link>
                            <li className='text-[13px] text-[#3b3b3b]'>Theory At Your Service</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Theory for Good</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Stores</li>
                            <li className='text-[13px] text-[#3b3b3b]'>The Theory App</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Careers</li>
                        </ul>
                    </div>
                    <div className={`block xl:hidden ${!dropdown2 ? 'border border-[#bebebe] px-[10px] py-[20px]' : 'border-none'}`}>
                        <div className='flex flex-col gap-2'>
                            <div onClick={() => setDropdown2(!dropdown2)} className={`w-full flex items-center justify-between ${dropdown2 ? 'border border-[#bebebe] px-[10px] py-[15px]' : 'border-none'}`}>
                                <div className='text-[14px] text-[#212529] tracking-wider font-bold font-archivo'>
                                    About Us
                                </div>
                                <div className={`${dropdown2 ? 'hidden' : 'block'} text-[13px]`}><IoIosArrowDown /></div>
                                <div className={`${dropdown2 ? 'block' : 'hidden'} text-[13px]`}><IoIosArrowUp /></div>
                            </div>
                            <div className={`${dropdown2 ? 'hidden' : 'block'}`}>
                                <ul type='none' className='flex flex-col gap-2'>
                                    <Link to={`/aboutus`}>
                                        <li className='text-[13px] text-[#3b3b3b]'>About Us</li>
                                    </Link>
                                    <li className='text-[13px] text-[#3b3b3b]'>Theory At Your Service</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>Theory for Good</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>Stores</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>The Theory App</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>Careers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[33%] hidden xl:block'>
                        <ul type='none' className='flex flex-col gap-2'>
                            <li className='text-[16px] text-[#212529] tracking-wider font-bold font-archivo'>Contact Us</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Email</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Here for International Orders</li>
                        </ul>
                    </div>
                    <div className={`block xl:hidden ${!dropdown3 ? 'border border-[#bebebe] px-[10px] py-[20px]' : 'border-none'}`}>
                        <div className='flex flex-col gap-2'>
                            <div onClick={() => setDropdown3(!dropdown3)} className={`w-full flex items-center justify-between ${dropdown3 ? 'border border-[#bebebe] px-[10px] py-[20px]' : 'border-none'}`}>
                                <div className='text-[14px] text-[#212529] tracking-wider font-bold font-archivo'>
                                    Contact Us
                                </div>
                                <div className={`${dropdown3 ? 'hidden' : 'block'} text-[13px]`}><IoIosArrowDown /></div>
                                <div className={`${dropdown3 ? 'block' : 'hidden'} text-[13px]`}><IoIosArrowUp /></div>
                            </div>
                            <div className={`${dropdown3 ? 'hidden' : 'block'}`}>
                                <ul type='none' className='flex flex-col gap-2'>
                                    <li className='text-[13px] text-[#3b3b3b]'>Email</li>
                                    <li className='text-[13px] text-[#3b3b3b]'>Here for International Orders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] flex-col gap-10 items-center hidden xl:flex'>
                    <div className='w-[250px] flex justify-between md:gap-10'>
                        <FaFacebookF className='text-[20px]' />
                        <FaXTwitter className='text-[20px]' />
                        <FaInstagramSquare className='text-[20px]' />
                        <FaPinterestP className='text-[20px]' />
                        <FaYoutube className='text-[20px]' />
                    </div>
                    <div className='w-[250px] flex justify-between items-center gap-3'>
                        <img className='w-[120px]' loading='lazy' src='https://ak-media.theory.com/i/theory/apple-store-logo?$defaultMedia$' />
                        <img className='w-[120px]' loading='lazy' src='https://ak-media.theory.com/i/theory/google-store-logo?$defaultMedia$' />
                    </div>
                </div>
            </div>
            <hr className='w-[95%] mx-auto hidden lg:block' />
            <div className='w-[80%] mx-auto py-[35px]'>
                <ul type='none' className='hidden xl:flex justify-between'>
                    <li className='text-[11px] text-[#3b3b3b]'>
                        <img src='/img/az.svg' className='w-[13px] inline-block mr-2' />
                        <span>Azerbaijan (AZN)</span>
                    </li>
                    <li className='text-[11px] text-[#3b3b3b]'>&copy; 2025 Theory</li>
                    <li className='text-[11px] text-[#3b3b3b]'>Site Map</li>
                    <li className='text-[11px] text-[#3b3b3b]'>Accessibility Statement</li>
                    <li className='text-[11px] text-[#3b3b3b]'>Your California Privacy Rights</li>
                    <li className='text-[11px] text-[#3b3b3b]'>Do Not Sell My Information</li>
                    <li className='text-[11px] text-[#3b3b3b]'>Terms of Use</li>
                    <li className='text-[11px] text-[#3b3b3b]'>Privacy Policy</li>
                    <li className='text-[11px] text-[#3b3b3b]'>Exclusions</li>
                </ul>
            </div>
            <div className='mx-auto pb-[35px] flex flex-col gap-10 items-center xl:hidden'>
                <div className='text-[13px] text-[#3b3b3b] flex items-center gap-2 xl:hidden'>
                    <img src='/img/az.svg' className='w-[16px]' />
                    <p>Azerbaijan (AZN)</p>
                </div>
                <div className='flex gap-5 xl:hidden xl:gap-10'>
                    <FaFacebookF className='text-[20px]' />
                    <FaXTwitter className='text-[20px]' />
                    <FaInstagramSquare className='text-[20px]' />
                    <FaPinterestP className='text-[20px]' />
                    <FaYoutube className='text-[20px]' />
                </div>
                <div>
                    <ul className="flex xl:hidden gap-4 whitespace-nowrap">
                        <li className="text-[13px] text-[#3b3b3b]">&copy; 2025 Theory</li>
                        <li className="text-[13px] text-[#3b3b3b]">Site Map</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer