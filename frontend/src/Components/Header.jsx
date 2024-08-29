import React from 'react'
import {Moon, Search, User} from 'lucide-react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='w-full flex mx-auto justify-between items-center gap-6 p-3 border-b-2 shadow-md bg-slate-500'>
      <div>
        <Link to ="/">
        <h2 className='text-xl text-white font-medium'>MoviesHub</h2>
        
        </Link>
      </div>

      <div className='w-3/5 relative  flex justify-center gap-2 '>
     
        <input className='py-1.5 w-full rounded-md px-6 focus:outline-none' type="text" name="search-bar" id="search-bar" placeholder='Search Movies or Tv shows' />
        <Search size={18} className='text-gray-500  absolute bottom-2 left-1 z-50'  />

    

        <div className='rounded-md h-9 w-9 flex justify-center items-center cursor-pointer  bg-white'>
            <Search size={20}/>
        </div>


      </div>

      <div className='flex justify-center gap-2 items-center'>
        <Link to="/login">
        <button className='bg-white text-gray-500 px-3 py-1 font-medium rounded-md'>Login</button>
        </Link>

        <div className='rounded-md h-9 w-9 flex justify-center items-center cursor-pointer  bg-white'>
        <Moon size={20}  />
        </div>

        <div className='rounded-md h-9 w-9 flex justify-center items-center cursor-pointer  bg-white'>
        <User size={20}  />
        </div>

      </div>
    </div>
  )
}

export default Header
