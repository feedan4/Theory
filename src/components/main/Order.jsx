import React from 'react'
import ProductSlider from './ProductSlider'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Order() {
  return (
    <>
      <Helmet>
        <title>Thanks for your order!</title>
      </Helmet>
      <div className='w-[90%] md:w-[70%] mx-auto flex flex-col gap-5 text-center my-[100px]'>
        <h1 className='text-[20px] md:text-[30px]'>Thank you for your order!#0406</h1>
        <p className='text-[14px]'>Your order has been accepted. You will get SMS and our <br /> operator will contact with you. </p>
        <Link to='/'>
          <div className='flex items-center justify-center'>
            <p className='text-[12px] underline'>Delivery details</p>
            <p className='text-[12px] px-[20px]'>|</p>
            <p className='text-[12px] underline'>FAQs</p>
          </div>
        </Link>
      </div>
      <ProductSlider />
    </>
  )
}

export default Order