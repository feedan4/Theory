import React, { useState } from 'react'

function Register() {

    return (
        <div className={`w-[80%] flex flex-col mx-auto`}>
            <div className='flex flex-col gap-4 text-[11px]'>
                <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <div className='capitalize w-full'>* first name</div>
                    <input className='w-full border border-[#bebebe] p-[5px] capitalize' placeholder='first name' />
                </div>
                <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <div className='capitalize w-full'>* last name</div>
                    <input className='w-full border border-[#bebebe] p-[5px] capitalize' placeholder='last name' />
                </div>
                <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <div className='capitalize w-full'>* email address</div>
                    <input className='w-full border border-[#bebebe] p-[5px] capitalize' placeholder='email address' />
                </div>
                <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <div className='capitalize w-full'>confirm email address</div>
                    <input className='w-full border border-[#bebebe] p-[5px] capitalize' placeholder='confirm email address' />
                </div>
                <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <div className='capitalize w-full'>* password</div>
                    <input className='w-full border border-[#bebebe] p-[5px] capitalize' placeholder='password (8-255 characters)' />
                </div>
                <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <div className='capitalize w-full'>* confirm password</div>
                    <input className='w-full border border-[#bebebe] p-[5px] capitalize' placeholder='confirm password' />
                </div>
                <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <div className='capitalize w-full'>birth date</div>
                    <div className='w-full flex items-center justify-between'>
                        <select className='w-[30%] border text-black border-[#bebebe] p-[5px] capitalize'>
                            <option>mon</option>
                        </select>
                        <select className='w-[30%] border text-black border-[#bebebe] p-[5px] capitalize'>
                            <option>day</option>
                        </select>
                        <input type='text' className='w-[30%] border border-[#bebebe] p-[5px] capitalize' placeholder='year' />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2 items-start justify-between'>
                    <div className='capitalize w-full'>gender</div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-[49%] border border-[#bebebe] p-[5px] flex items-center gap-2'>
                            <button className={`w-[10px] h-[10px] border-2 border-white outline outline-1 outline-black rounded-full`}></button>
                            <div className='capitalize'>female</div>
                        </div>
                        <div className='w-[49%] border border-[#bebebe] p-[5px] flex items-center gap-2'>
                            <button className={`w-[10px] h-[10px] border-2 border-white outline outline-1 outline-black rounded-full`}></button>
                            <div className='capitalize'>male</div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <button className={`w-[10px] h-[10px] border-2 border-white outline outline-1 outline-black`}></button>
                    <div className='capitalize text-[11px]'>I'd like to hear from Theory</div>
                </div>
                <div className='text-[9px]'>1By checking this box, you consent to receive emails about Theory's latest collections, exclusive offers, and special events. You may revoke your consent at any time by clicking unsubscribe at the bottom of any email from us. By clicking 'SAVE' below you accept the terms of our Privacy Policy</div>
                <hr className='w-full h-[1px] border-none bg-[#bebebe]' />
                <button className='w-full text-center text-[12px] bg-black border border-black text-white uppercase py-[5px]'>register</button>
            </div>
        </div>
    )
}

export default Register