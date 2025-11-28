import React from 'react'
import { product2 } from './img/Project'

const Section2 = () => {
    let data = product2.map((v, i) => {
        return (<>
            <div className='r1 text-center'>
                <img src={v.url} alt="" className='w-full' />
                <h2 className='text-[20px] font-bold'>{v.name}</h2>
                <h3 className='text-[16px] text-[blue] font-bold '>{v.price}</h3>
            </div>
        </>)
    })
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto px-[5%] py-[30px] bg-white">
                <div className='py-[20px] px-[15px] border border-2 border-red-500 rounded-2xl'>
                    <h2 className='uppercase text-[32px] text-center border1'>hot deal</h2>
                    <hr />
                    <div className='flex justify-between'>
                        {data}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section2
