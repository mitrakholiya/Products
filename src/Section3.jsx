import React from 'react'
import { product } from './img/Project'
import imgright from "./img/Right.png"

const Section3 = () => {

    let data = product.map((v, i) => {
        return (<>
            <div className='bg-gray-200 r1 flex flex-col justify-center items-center py-[30px]'>
                <img src={v.url} alt="" className='w-[70%] ' />
                <h2 className='text-[20px] font-bold'>{v.name}</h2>
                <h3 className='text-[16px]'>Price:{v.price}</h3>
            </div>
        </>)
    })
    return (
        <div className="bg-gray-200">
            {/* ALL DATA */}
            <div className="container px-[5%] m-auto">
                <div className='py-10'>
                    <div className="flex text-center overflow-x-scroll flex-wrap ">
                        <div className='flex'>
                            {data}
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    {/* Right Side Data */}
                    <div className="flex">
                        <div className="w-[50%]">
                            <img src={imgright} alt="" className='h-full' />
                        </div>
                        <div className="flex text-center overflow-x-scroll flex-wrap w-[70%]">
                            <div className='flex'>
                                {data}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
