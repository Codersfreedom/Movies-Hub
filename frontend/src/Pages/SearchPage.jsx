import React from 'react'
import { useSearchStore } from '../store/useSearchStore'
import { Link } from 'react-router-dom'
import { Skeleton } from '@chakra-ui/skeleton'

const Search = () => {

  return (
    <div className={'absolute flex flex-col min-h-fit  w-full p-4 rounded-b-md top-10 left-0   dark:bg-gray-600 border-2 dark:border-global-border-dark border-global-border z-50'}>
      <h3 className='text-start font-bold text-xs mb-3'>Search Result for: </h3>

      <Skeleton 
      isLoaded={true}
      
      > 

      <Link className='flex gap-4 w-full  h-24 rounded-md hover:cursor-pointer hover:bg-slate-500 pl-2 py-2'>
        <div className='h-full w-14 rounded-md overflow-hidden '>
          <img className='h-full w-full' src="/wallpaper1.png" alt="" />
        </div>

        <div className='flex justify-center flex-col  overflow-hidden '>
          <h2 className='font-bold'>Movie Name</h2>
          <div className='font-light text-sm'>
         <span>Movie</span> <span>●</span> <span>Year</span>
          
          </div>
        </div>
      </Link>
      </Skeleton>


    </div>
  )
}

export default Search
