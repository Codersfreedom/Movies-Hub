import React from 'react'
import LeftSideBar from './LeftSideBar'
import Slider from './Swiper'

const HomeContent = () => {
  return (
    <div className='h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative mx-auto'>
     <LeftSideBar />
     <div className=' w-11/12 h-4/5  ml-24  flex justify-center'>
         <Slider />
     </div>
    </div>
  )
}

export default HomeContent
