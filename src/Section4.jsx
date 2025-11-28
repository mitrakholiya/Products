import React from 'react'
import imgright from "./img/Right.png"
import { product } from './img/Project'

const Section4 = () => {
    let data = product.map((v, i) => {
        return (<>
            <div className='bg-white r1 flex flex-col justify-center items-center py-[30px]'>
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
                    {/* Right Side Data */}

                    <div className="flex mb-10">
                        <div className="flex text-center overflow-x-scroll flex-wrap w-[70%]">
                            <div className='flex'>
                                {data}
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <img src={imgright} alt="" className='h-full' />
                        </div>
                    </div>
                    {/* Left Side Data */}
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

export default Section4
