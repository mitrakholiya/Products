import React from 'react'

const Section1 = () => {
    return (
        <div className="bg-[#1f1f43]">
            <div className='container bg-[#1f1f43] text-white font-bold uppercase py-4 px-[5%] mx-auto ' >
                <div className="flex items-center">
                    <div className="w-[60%] flex text-[14px] justify-between">
                        <p>household</p>
                        <p>helthy drops</p>
                        <p>aquaetic products</p>
                        <p>buffers solution</p>
                        <p>supply</p>
                        <p>services</p>
                    </div>
                    <div className="w-[40%] flex justify-end">
                        <input type="text" placeholder='Search for product'  className='py-[10px] px-[15px] border border-[2px] border-[#dadadaa7] rounded-2xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
