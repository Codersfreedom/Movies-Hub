import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'

import LeftSideBar from './LeftSideBar'
import Slider from './Swiper'
import { useContentStore } from '../store/UseContentStore'
import useFetchCategories from '../hooks/useFetchCategories'
import { SMALL_IMAGE_PATH } from '../utils/constants'
import useFetchTrending from '../hooks/useFetchTrending'




const HomeContent = () => {

  const { fetchTrending } = useFetchTrending();
  const { fetchCategories } = useFetchCategories()

  const { trendingContent, categoryContent, isLoading } = useContentStore();


  useEffect(() => {
    if (Object.keys(trendingContent).length == 0) {

      fetchTrending("all");

    }
  }, [])

  //TODO: Implement recommendations section here instate of categorycontent
  useEffect(() => {
    if (Object.keys(fetchCategories).length == 0) {

      fetchCategories("now_playing", "movie");
    }


  }, [])

  return (
    <div className='min-h-screen max-w-screen  xl:mt-16 max-sm:mt-5 pr-4 relative dark:bg-body-dark overflow-hidden '>

      <LeftSideBar />
      <div className='hero-section w-[90vw] h-[80vh]   flex justify-center max-sm:w-[85vw] max-sm:h-[70vh]  ml-24 mt-12 max-sm:ml-10'>

        {Object.keys(trendingContent).length > 0 && (
         
            <Slider sliderContent={trendingContent.slice(0, 5)} />

          
        )}
      </div>

      <h1 className='text-2xl font-bold ml-24 max-sm:ml-10 max-sm:text-xl mt-12'>Now Playing</h1>

      <div className='max-w-full grid-content  xl:ml-24 mt-6 max-sm:ml-10  max-sm:min-w-full  pr-14 ' >
        {Object.keys(categoryContent).length > 0 && categoryContent?.map((content, index) => (
          
          <Skeleton isLoaded={!isLoading}>

         
          <Link key={index} to={`/movie/${content?.id}`} className='flex h-80 w-52 max-sm:h-56 max-sm:w-32 max-sm:gap-1 flex-col gap-3 group pb-3 '>
            <div className='w-full h-4/5   rounded-lg  overflow-hidden '>
              <img className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 rounded-md h-full w-full' title='' src={`${SMALL_IMAGE_PATH}${content.poster_path}`} alt={content.title || content.name} />
            </div>


            <div>
              {content?.title}

            </div>


          </Link> 
          </Skeleton>
        ))}

  

      </div>

    </div>
  )
}

export default HomeContent
