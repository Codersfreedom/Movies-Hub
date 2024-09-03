import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'

import LeftSideBar from './LeftSideBar'
import Slider from './Swiper'
import Footer from './Footer'
import useFetchSlider from '../hooks/useFetchSlider'
import { useContentStore } from '../store/UseContentStore'
import useFetchCategories from '../hooks/useFetchCategories'
import { SMALL_IMAGE_PATH } from '../utils/constants'



const HomeContent = () => {

  const { fetchSlider } = useFetchSlider();
  const {  fetchCategories } = useFetchCategories()

  const { sliderData, categoryContent } = useContentStore();


  useEffect(() => {
    if (Object.keys(sliderData).length == 0) {

      fetchSlider();

    }
  }, [])

  useEffect(() => {
    if (Object.keys(categoryContent).length == 0) {

      fetchCategories();
    }
  }, [])


  return (
    <div className='h-full w-full  mt-16 relative '>
      <LeftSideBar />
      <div className=' w-11/12 h-[700px]  flex  ml-24'>

        {Object.keys(sliderData).length > 0 ? (

          <Slider sliderContent={sliderData} />
        ) : (
          <Skeleton height='600px' width='1456px' />
        )}
      </div>

      <h1 className='text-2xl font-bold ml-24 mt-12'>Now Playing</h1>

      <div className='w-11/12  ml-24 mt-6 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-5 pb-5 ' >
        {Object.keys(categoryContent).length > 0 && categoryContent?.map((content, index) => (
          <Link key={index} to={`/movie/${content?.id}`} className='flex h-80 w-52 flex-col gap-3 group  '>
            <div className='w-full h-4/5   rounded-lg  overflow-hidden '>
              <img className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 rounded-md h-full w-full' title='' src={`${SMALL_IMAGE_PATH}${content.poster_path}`} alt={content.title || content.name} />
            </div>


            <div>
              {content?.title}

            </div>


          </Link>
        ))}

        {Object.keys(categoryContent).length == 0 && (
          <div className='flex flex-col gap-3' >
            <Skeleton
              height='256px'
              width='200px'
              
              fadeDuration={5}>

            </Skeleton>
            <SkeletonText noOfLines={1} width={200} skeletonHeight={4} />
          </div >
        )}

      </div>
      
    </div>
  )
}

export default HomeContent
