import React from 'react'

const Section10 = () => {
    return (
    <div className="bg-[#1f1f43]">
        <div className='container bg-[#1f1f43] text-white font-bold uppercase py-4 px-[5%] mx-auto ' >
            <div className="flex items-center">
                <div className="w-[60%] ">
                    <p className='text-[32px]'>Sign up To Us Newsletter</p>
                    <p>be the Frist to Know. Sing up to newsletter today</p>
                </div>
                <div className="w-[40%] flex justify-end flex">
                    <input type="text" placeholder='Enter Your Email' className='w-full py-[10px] px-[15px] border border-[2px] border-[#dadadaa7] rounded-2xl' />
                    <button className='w-[30%] btn'>Sing Up</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Section10
