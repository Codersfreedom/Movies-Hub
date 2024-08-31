import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'

import LeftSideBar from './LeftSideBar'
import Slider from './Swiper'
import Footer from './Footer'

const HomeContent = () => {

  const[isLoading,setIsLoading] = useState(true);

  return (
    <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative '>
      <LeftSideBar />
      <div className=' w-11/12 h-96    flex  ml-24'>
        <Slider />
      </div>

      <h1 className='text-2xl font-bold ml-24 mt-12'>Recomandations</h1>

      <div className='w-full  ml-24 mt-6 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-0 mr-12 ' >
        <Link to="/movie/1234" className='flex h-80 w-52 flex-col gap-3   '>
          <div className='w-full h-4/5 transition-transform hover:border-2 rounded-lg hover:border-white overflow-hidden '>
            <Skeleton
              height={'256px'}
              isLoaded={isLoading}
              fadeDuration={5}>

              <img className='object-cover rounded-md h-full w-full' title='' src="wallpaper1.png" alt="" />

            </Skeleton>

          </div>


          <div>
            {!isLoading ? <SkeletonText noOfLines={1} skeletonHeight={4} /> : "Movie Name"}

          </div>


        </Link>
      </div>
      <Footer/>
    </div>
  )
}

export default HomeContent
