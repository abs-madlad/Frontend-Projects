import React from 'react'

const Body = () => {
  return (
    <div className='bg-white h-screen'>
        <div className='grid grid-cols-2 text-[#F7EEDD]'>
            <div>
                <img className='' src="japs.jpg" alt="img" />
            </div>
            <div className='p-2 bg-[#D20062]'>
                <div className='p-2 text-center'>
                    <p className='font-semibold text-3xl my-2'>Work Opportunities in JAPAN</p>
                    <div className='my-5'>
                        <ul className='grid grid-cols-3 p-2'>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Education</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Information Technology</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Automative</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Legal</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Creative Media</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Domestic Worker</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Finance</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Human Resources</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Manufacturing</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Marketing</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Scientific</li>
                            <li className='border-black border-2 rounded-md p-2 bg-white text-[#4942E4]'>Tourism</li>

                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Body