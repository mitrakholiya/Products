import React from 'react'

const Header = () => {
    return (
        <div className="bg-gray-200 sticky top-0">
            <div className='bg-gray-50 py-2.5 px-[5%] mx-auto container'>
                <div className="flex justify-between">
                    <div>
                        <h1 className='text-[32px] font-bold leading-[0.8]'>
                            DAWN SCI
                        </h1>
                        <p className='text-[12px]'>We Supply quality product</p>
                    </div>
                    <div className="flex">
                        <p className='px-2.5'>WHOLESALE INQUIRY</p>
                        <p>BECOME A DEALER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
