import React from 'react'

function Loader() {
    return (
        <>
            <div className='flex w-[100%] z-50 relative h-[100vh] animate-pulse justify-center items-center'>
                <div className='top-0'>
                    <img className='h-[100px] w-[20 0px]' src="/img/theoryload.png" />
                </div>
            </div>
        </>
    )
}

export default Loader