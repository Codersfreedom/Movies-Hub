import React from 'react'
import { useSearchStore } from '../store/useSearchStore'
import { Link } from 'react-router-dom'
import { Skeleton } from '@chakra-ui/skeleton'
import { SMALL_IMAGE_PATH } from '../utils/constants'

const Search = () => {
  const { searchContent, isLoading } = useSearchStore();

  return (
    <div className={'absolute flex flex-col min-h-fit  w-full p-4 rounded-b-md top-10 left-0   dark:bg-gray-600 border-2 dark:border-global-border-dark border-global-border z-50 '}>
      <h3 className='text-start font-bold text-xs mb-3'>Search Result for: </h3>

      <Skeleton
        isLoaded={!isLoading}
        className='overflow-scroll h-96'
      >
        {Object.keys(searchContent).length >0 &&  searchContent.map((searchResult) => (
          <Link to={`/${searchResult?.media_type}/${searchResult?.id}`} key={searchResult?.id} className='flex gap-4 w-full  h-24 rounded-md hover:cursor-pointer hover:bg-slate-500 pl-2 py-2'>
            <div className='h-full w-14 rounded-md overflow-hidden '>
              <img className='h-full w-full' src={SMALL_IMAGE_PATH + searchResult.poster_path || SMALL_IMAGE_PATH + searchResult.profile_path } alt="" />
            </div>

            <div className='flex justify-center flex-col  overflow-hidden '>
              <h2 className='font-bold'>{searchResult.title || searchResult.name}</h2>
              <div className='font-light text-sm'>
                <span>{searchResult.media_type}</span> <span>●</span> <span>{ searchResult.release_date && searchResult?.release_date.split("-")[0] }</span>

              </div>
            </div>
          </Link>
        ))}

      </Skeleton>


    </div>
  )
}

export default Search
