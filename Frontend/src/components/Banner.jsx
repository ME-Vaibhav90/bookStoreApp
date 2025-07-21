import React from 'react'
import pic from "../../public/pic.png";
function Banner() {
    return (<>
        <div className="max-w-screen-xl container mx-auto md:px-5 px-2 flex flex-col md:flex-row mb-15 mt-15">
            <div className="w-full order-2 md:order-1 md:w-1/2  mt-8 md:mt-32 ">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold ">Hello, welcome here to learn something <span className='text-pink-500'> new everyday!!!</span>
                    </h1>
                    <p className="text-xl font-light fw-300 text-gray-800 dark:text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam.
                        Tempora amet atque expedita, quae corrupti totam sed pariatur
                        corporis at veniam est voluptas animi!
                    </p>
                    <label className="input validator w-full bg-white dark:bg-slate-900 rounded-md">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="40" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input className='w-full px-3 py-2 dark:border-white-300 rounded-md  dark:bg-slate-900 
                         dark:text-white' type="email" placeholder="mail@site.com" required />
                    </label>
                    <div className="validator-hint hidden  ">Enter valid email address</div>
                </div>
                <button className="btn  btn-secondary">Get Started</button>
            </div>
            <div className=" order-1 mt-15  md:w-1/2 pl-5 "> 
            <img src={pic} alt="noo" className='w-130 h-100  md:ml-0' /></div>
        </div>
    </>

    )
}

export default Banner