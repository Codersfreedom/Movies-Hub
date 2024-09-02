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
import { Cone } from 'lucide-react'


const HomeContent = () => {

  const { fetchSlider } = useFetchSlider();
  const { isLoading, fetchCategories } = useFetchCategories()

  const { sliderData,categoryContent } = useContentStore();
  

  useEffect(() => {
    if (Object.keys(sliderData).length == 0) {

      fetchSlider();

    }
  }, [])

  useEffect(()=>{
    if(Object.keys(categoryContent).length == 0){

      fetchCategories();
    }
  },[])


  return (
    <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative '>
      <LeftSideBar />
      <div className=' w-11/12 h-[700px]  flex  ml-24'>

        {Object.keys(sliderData).length > 0 ? (

          <Slider sliderContent={sliderData} />
        ) : (
          <Skeleton height='600px' width='1456px' />
        )}
      </div>

      <h1 className='text-2xl font-bold ml-24 mt-12'>Now Playing</h1>

      <div className='w-11/12  ml-24 mt-6 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-5  ' >
        { Object.keys(categoryContent).length > 0 && categoryContent?.map((content,index)=>(
          <Link key={index} to={`/movie/${content?.id}`} className='flex h-80 w-52 flex-col gap-3 group  '>
          <div className='w-full h-4/5   rounded-lg  overflow-hidden '>
            <Skeleton
              height={'256px'}
              isLoaded={!isLoading}
              fadeDuration={5}>

              <img className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 rounded-md h-full w-full' title='' src={`${SMALL_IMAGE_PATH}${content.backdrop_path}`} alt="" />

            </Skeleton>

          </div>


          <div>
            {isLoading ? <SkeletonText noOfLines={1} skeletonHeight={4} /> : content?.title}

          </div>


        </Link>
        ))}
        
      </div>
      <Footer />
    </div>
  )
}

export default HomeContent
