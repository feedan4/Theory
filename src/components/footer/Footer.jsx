import React from 'react'
import { FaFacebookF, FaInstagramSquare, FaPinterestP, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <div className='flex flex-col'>
            <div className='bg-[#FAFAFA] py-[35px]'>
                <div className='w-[80%] sm:w-[55%] lg:w-[80%] xl:w-[55%] mx-auto flex lg:flex-row flex-col justify-center items-center gap-5'>
                    <div className='flex flex-col gap-3 text-center lg:text-start'>
                        <p className='font-archivo tracking-wider text-[16px] text-[#212529]'>Sign Up for 15% Off*</p>
                        <p className='text-[12px] text-[#494949]'>Join our mailing list for our latest updates and enjoy 15% off your first full price order. Learn more about our privacy policy here</p>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-auto'>
                        <input type='text' placeholder='enter email address' className='w-full lg:w-[277px] px-[10px] h-[40px] text-[13px] border border-[#808080] text-[#000] capitalize' />
                        <button className='bg-[#7D7D7D] font-archivo h-[40px] lg:w-[110px] w-full text-white text-[12px] uppercase border border-[#7D7D7D]'>sign up</button>
                    </div>
                </div>
            </div>
            <div className='w-[95%] md:w-[87%] mx-auto h-[79%] py-[50px] bg-white flex flex-col gap-10 lg:gap-0 lg:flex-row items-center'>
                <div className='w-[80%] flex flex-col md:flex-row gap-5 md:gap-0'>
                    <div className='w-full md:w-[33%]'>
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
                    <div className='w-full md:w-[33%]'>
                        <ul type='none' className='flex flex-col gap-2'>
                            <li className='text-[16px] text-[#212529] tracking-wider font-bold font-archivo'>About Us</li>
                            <li className='text-[13px] text-[#3b3b3b]'>About Us</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Theory At Your Service</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Theory for Good</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Stores</li>
                            <li className='text-[13px] text-[#3b3b3b]'>The Theory App</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Careers</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-[33%]'>
                        <ul type='none' className='flex flex-col gap-2'>
                            <li className='text-[16px] text-[#212529] tracking-wider font-bold font-archivo'>Contact Us</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Email</li>
                            <li className='text-[13px] text-[#3b3b3b]'>Here for International Orders</li>
                        </ul>
                    </div>
                </div>
                <div className='w-[20%] flex flex-col gap-10 items-center'>
                    <div className='flex gap-5 md:gap-10'>
                        <FaFacebookF className='text-[20px]' />
                        <FaXTwitter className='text-[20px]' />
                        <FaInstagramSquare className='text-[20px]' />
                        <FaPinterestP className='text-[20px]' />
                        <FaYoutube className='text-[20px]' />
                    </div>
                    <div className='hidden gap-3 lg:flex'>
                        <img className='w-[120px]' loading='lazy' src='https://ak-media.theory.com/i/theory/apple-store-logo?$defaultMedia$' />
                        <img className='w-[120px]' loading='lazy' src='https://ak-media.theory.com/i/theory/google-store-logo?$defaultMedia$' />
                    </div>
                </div>
            </div>
            <hr className='w-[95%] mx-auto hidden lg:block' />
            <div>

            </div>
        </div>
    )
}

export default Footer