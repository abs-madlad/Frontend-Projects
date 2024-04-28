import React from 'react'

const Header = () => {
  return (
    <div className='bg-white'>
        <header className='grid grid-cols-2 text-black text-lg font-semibold bg-white p-2'>
            <div className='p-2 flex items-center'>
                <div>
                    <img className='h-[70px] w-[70px] border-transparent rounded-lg' src="logo.jpeg" alt="logo" />
                </div>
                <div className='mx-2'>
                    <span className='text-lg font-semibold text-black'>Work in </span>
                    <span className='text-red-500'> Japan </span>
                </div>
            </div>
            <div className='grid grid-cols-4 p-2 mt-4'>
                <div className=''>
                    <span className='hover:text-[#4942E4]'>Jobs</span>
                </div>
                <div className=''>
                    <span className='hover:text-[#4942E4]'>Companies</span>
                </div>
                
                <div >
                    <span className='hover:text-[#4942E4]'>LogIn</span>
                </div>
                <div className=' '>
                    <div>
                        <span className='border-blue-600 border-2 rounded-xl p-1 hover:bg-blue-400'>
                        <button className=''>Register</button>
                        </span>
                    </div>
                </div>
                <hr />
            </div>
        </header>
       
        
    </div>
  )
}

export default Header