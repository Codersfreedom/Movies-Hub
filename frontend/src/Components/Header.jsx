import React, { useState } from 'react'
import { Moon, Search, Sun, User } from 'lucide-react';
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthSotre';
import useLogout from '../hooks/useLogout';


const Header = ({isAuthPage}) => {

  const {authUser} = useAuthStore();
  const {logout} = useLogout();

  const [dark,setDark] = useState(false);

  const toggleDarkMode =()=>{
    setDark(!dark);
    document.body.classList.toggle('dark');
  }
  const handleLogout = ()=>{
    logout();
  }

  return (
    <div className='w-full fixed top-0 flex mx-auto justify-between items-center  gap-6 p-3 border-b-2 dark:border-b-global-border-dark border-b-global-border  bg-gray-200 dark:bg-primary-dark dark:text-white text-black z-50'>
      <div>
        <Link to="/">
          <h2 className='text-xl  font-medium'>MoviesHub</h2>

        </Link>
      </div>

     { !isAuthPage && (<div className='w-2/5 relative  flex justify-center items-center  gap-2 '>

        <input className='py-2 w-full rounded-md px-6 focus:outline-none  dark:bg-gray-600 border-2 dark:border-global-border-dark border-global-border    ' type="text" name="search-bar" id="search-bar" placeholder='Search Movies or Tv shows' />
        <Search size={18} className='text-gray-500 dark:text-white  absolute bottom-3 left-1 z-50' />



        <div className='rounded-md h-10 w-10 flex justify-center items-center cursor-pointer dark:bg-gray-600 border-1 dark:border-global-border-dark border-global-border   bg-white'>
          <Search size={20} />
        </div>


      </div>)}

      <div className='flex justify-center gap-2 items-center'>
       
        {!authUser ? (<Link to="/login">
          <button className='bg-white dark:text-white dark:bg-gray-600 border-2 dark:border-global-border-dark border-global-border px-3 py-2 font-medium rounded-md'>Login</button>
        </Link>):
        <button className='bg-white dark:text-white dark:bg-gray-600 border-2 dark:border-global-border-dark border-global-border px-3 py-2 font-medium rounded-md' onClick={handleLogout}>Logout</button>

        }

        <div className='rounded-md  dark:text-white dark:bg-gray-600 border-1 dark:border-global-border-dark border-global-border h-10 w-10  flex justify-center items-center cursor-pointer  bg-white'
        onClick={toggleDarkMode}
        >
          { !dark ?  <Moon size={20} /> : <Sun size={20} /> }
        </div>


        <div className='rounded-md  dark:text-white dark:bg-gray-600 border-1 dark:border-global-border-dark border-global-border h-10 w-10 flex justify-center items-center cursor-pointer  bg-white'>
          <User size={20} />
        </div>


      </div>
    </div>
  )
}

export default Header
