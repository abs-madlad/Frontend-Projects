"use client"
import React from 'react'
import { IoIosTimer } from "react-icons/io";
import { GiEarthAmerica } from "react-icons/gi";
import { WiTime4 } from "react-icons/wi";
import { FaHome } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";




const Jobs = () => {
  return (
    <div className='bg-[#4942E4] p-2'>
        <div className=' text-white font-medium text-center p-2'>
                <div>
                    <div>
                        <span className='mx-3'>Job Search</span>
                        <span>Companies</span>
                    </div>
                    <div className='p-2 '>
                        <div className='p-2 '>
                            <div className='grid grid-cols-4 bg-white text-black border-transparent rounded-lg p-2'>
                                <div className='flex flex-col border-r-2'>
                                    <span>Keywords</span>
                                    <center><input placeholder='What are you looking for?' type="text" /></center>
                                </div>
                                <div className='flex flex-col border-r-2'>
                                    <span>Job Category</span>
                                    <center><input placeholder='Choose an Industry' type="text" /></center>
                                </div>
                                <div className=' border-r-2'>
                                    <span>Job location</span>
                                    <center><input placeholder='Where do you want to work' type="text" /></center>
                                </div>
                                <div className='p-2'>
                                    <div>
                                        <button className='bg-[#3559E0] text-white p-2 rounded-md'>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='p-2'>
                                <div className='p-2'>
                                    <div className='p-2 grid grid-cols-5'>
                                        <div className='border-transparent bg-white text-[#3559E0] mx-1 p-1 flex flex-col justify-center'>
                                        <center><span className='text-4xl'><WiTime4 /></span></center>
                                            <span>Full time</span>
                                        </div>
                                        <div className='border-transparent bg-white text-[#3559E0] mx-1 p-1'>
                                            <center><span className='text-4xl'><IoIosTimer /></span></center>
                                            <span>Part time</span>
                                        </div>
                                        <div className='border-transparent bg-white text-[#3559E0] mx-1 p-1'>
                                            <center><span className='text-4xl'><GiEarthAmerica /></span></center>
                                            <span>Overseas</span>
                                        </div>
                                        <div className='border-transparent bg-white text-[#3559E0] mx-1 p-1'>
                                            <center><span className='text-4xl'><FaHome /></span></center>
                                            <span>Work from Home</span>
                                        </div>
                                        <div className='border-transparent bg-white text-[#3559E0] mx-1 p-1'>
                                            <center><span className='text-4xl'><FcGlobe /></span></center>
                                            <span>Visa Offered</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Jobs