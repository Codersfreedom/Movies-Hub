import React, { useEffect, useRef, useState } from 'react'
import { Moon, Search, Sun, User } from 'lucide-react';
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthSotre';
import useLogout from '../hooks/useLogout';
import { useSearchStore } from '../store/useSearchStore';
import SearchPage from '../Pages/SearchPage';
import useSearch from '../hooks/useSearch';
import useDebounceSearch from '../hooks/useDebounceSearch';

const Header = ({ isAuthPage }) => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const { authUser } = useAuthStore();
  const { isTyping, setIsTyping, searchContent: searchResult,setSearchContent } = useSearchStore();

  const { logout } = useLogout();
  const { searchContent } = useSearch();
  const deboucedValue = useDebounceSearch(query, 1000);

  const searchRef = useRef();


  document.body.addEventListener('click', (e) => {
    if (e.target == searchRef.current?.firstChild?.firstChild || e.target == searchRef.current?.lastChild?.firstChild) {
      setIsVisible(true)
    } else {
      setIsVisible(false);
    }
  })


  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.add(theme);
  }, [theme])


  const toggleDarkMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    document.body.classList.toggle('dark');
  }

  const handleLogout = () => {
    logout();
  }

  const handleType = (e) => {
    setQuery(e.target.value);
    if ((e.target.value).length > 0) {
      setIsTyping(true)
    } else {
      setIsTyping(false)
      setSearchContent({});
    }
  }
  // search here

  useEffect(() => {
    if (deboucedValue.length > 0) {
      searchContent(deboucedValue)
    }
  }, [deboucedValue]);

  // search icon search event

  const handleSearch = () => {
    if (deboucedValue.length > 0 && Object.keys(searchResult).length == 0) {
      searchContent(deboucedValue);
    }
  }

  return (
    <div className='w-full fixed top-0 flex mx-auto justify-between items-center  gap-6 p-3 border-b-2 dark:border-b-global-border-dark border-b-global-border  bg-gray-200 dark:bg-primary-dark dark:text-white text-black z-50'>
      <div>
        <Link to="/">
          <h2 className='text-xl  font-medium'>MoviesHub</h2>

        </Link>
      </div>

      {!isAuthPage && (<div className='w-2/5  flex justify-center items-center  gap-2 ' ref={searchRef}>

        <div className='w-full relative' >

          <input className='py-2  w-full rounded-md px-6 focus:outline-global-border dark:focus:outline-global-border-dark  dark:bg-gray-600 border-2 dark:border-global-border-dark border-global-border    ' type="text" name="search-bar" id="search-bar" placeholder='Search Movies or Tv shows'
            value={query}
            onChange={handleType}
            
          />
          <Search size={18} className='text-gray-500 dark:text-white  absolute bottom-3 left-1 z-50' />

          {isTyping && isVisible && <SearchPage searchQuery={query} />}
        </div>



        <div className='rounded-md h-10 w-10 flex justify-center items-center cursor-pointer dark:bg-gray-600 border-1 dark:border-global-border-dark border-global-border   bg-white'>
          <Search onClick={handleSearch} size={20} />
        </div>

      </div>)}

      <div className='flex justify-center gap-2 items-center'>

        {!authUser ? (<Link to="/login">
          <button className='bg-white dark:text-white dark:bg-gray-600 border-2 dark:border-global-border-dark border-global-border px-3 py-2 font-medium rounded-md'>Login</button>
        </Link>) :
          <button className='bg-white dark:text-white dark:bg-gray-600 border-2 dark:border-global-border-dark border-global-border px-3 py-2 font-medium rounded-md' onClick={handleLogout}>Logout</button>

        }

        <div className='rounded-md  dark:text-white dark:bg-gray-600 border-1 dark:border-global-border-dark border-global-border h-10 w-10  flex justify-center items-center cursor-pointer  bg-white'
          onClick={toggleDarkMode}
        >
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </div>


        <div className='rounded-md  dark:text-white dark:bg-gray-600 border-1 dark:border-global-border-dark border-global-border h-10 w-10 flex justify-center items-center cursor-pointer  bg-white'>
          <User size={20} />
        </div>


      </div>
    </div>
  )
}

export default Header
