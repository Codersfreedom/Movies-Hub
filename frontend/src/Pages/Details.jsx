import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import CardSwiper from '../Components/CardSwiper'
import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'

import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'
import { Check, Heart, Star, Volume2, VolumeOff } from 'lucide-react'
import { useContentStore } from '../store/UseContentStore'
import useGetDetails from '../hooks/useGetDetails'
import { ORIGINAL_IMAGE_PATH, SMALL_IMAGE_PATH } from '../utils/constants'
import useFetchReviews from '../hooks/useFetchReviews'
import useFetchSimilar from '../hooks/useFetchSimilar'

const Details = ({ pageName }) => {


    const { id } = useParams();

    const { getDetails } = useGetDetails();
    const { fetchReviews, reviews } = useFetchReviews()
    const { fetchSimilar, similar, isLoading } = useFetchSimilar()

    const { contentDetails } = useContentStore();

    useEffect(() => {
        getDetails(id,pageName);
        fetchReviews(id, pageName);
        fetchSimilar(id, pageName);
    }, [id])






    if (Object.keys(contentDetails).length == 0 || isLoading ) {
        return (
            <div className='h-screen w-screen bg-black'>

            </div>
        )
    }

    console.log("Similar:",similar);
    // console.log("Reviews:",reviews)
    // console.log("Details: ",contentDetails)

    return (
        <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative mx-auto'>
            <Header />
            <LeftSideBar />
            {/* Content start */}
            <div className='w-full min-h-full flex flex-col '>
                {/* Banner */}
                <div className='relative h-[80vh]  w-screen  ml-16  rounded-md' >
                    <img className='max-h-full  w-full object-cover' src={contentDetails.backdrop_path !==null ? ORIGINAL_IMAGE_PATH + contentDetails.backdrop_path : ORIGINAL_IMAGE_PATH + contentDetails.poster_path} alt='poster' />
                    <div className='absolute bottom-3 left-9 flex flex-col gap-2'>
                        <h1 className=' text-white text-4xl '>{contentDetails?.title || contentDetails.name}</h1>
                        <div className='flex gap-2 text-white'>
                            <h2 >{contentDetails.genres[0].name}</h2> <span>●</span> <span>{ contentDetails.release_date ? contentDetails.release_date.split("-")[0] : contentDetails.first_air_date.split("-")[0]}</span> <span>●</span> <span>{contentDetails.adult ? "18+" : "PG-13"}</span>

                        </div>
                    </div>
                    <Volume2 className='rounded-full absolute right-20 bottom-3  hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-12 w-12 p-3' size={30} />
                    <VolumeOff className='rounded-full hidden absolute right-20 bottom-3  hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-12 w-12 p-3' size={30} />

                </div>
                {/* Rating section */}
                <div className='w-full  justify-center items-start flex flex-col ml-24 mt-5 gap-5'>

                    <div className='flex gap-4 justify-center items-center'>

                        <div className='h-10 w-24 rounded-lg bg-slate-500 text-white  flex justify-center items-center gap-1  px-3'>
                            <Star size={20} /> {contentDetails.vote_average}
                        </div>

                        <div className='flex justify-center items-center  gap-2'>
                            <Heart className='rounded-full hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-12 w-12 p-3' size={30} />
                            <Check className='rounded-full hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-12 w-12 p-3' size={30} />

                        </div>
                    </div>
                    {/* Overview section */}
                    <div className='w-11/12 h-fit flex  gap-8 justify-between mt-5 pr-2' >
                        <div className='text-justify w-1/2'>

                            {contentDetails?.overview}
                        </div>
                        <div className='flex flex-col w-1/2 items-center gap-2'>
                            <h2 className='text-2xl font-bold mb-3'>Genre</h2>
                            <div className='flex gap-2 w-full h-fit justify-center flex-wrap '>
                                {
                                    contentDetails.genres.map((genre, index) => {

                                        return <button key={index} className='rounded-lg hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-10 w-fit px-2  '>{genre?.name}</button>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
                {/* Reviews section */}


                <div className=' reviews flex h-[300px]  w-full justify-center ml-5 mt-5 ' >
                    <CardSwiper reviews={reviews} />

                </div>

                <h1 className='ml-24 mt-10 text-2xl font-bold'>Similar</h1>
                <div className='similar ml-24 mt-6 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-0 mr-12 '>
                    {similar.map((content, index) => (

                        <Link key={index} to={`/${pageName}/${content.id}`} className='flex h-80 w-52 flex-col gap-3 group   '>
                            <div className='w-full h-4/5  rounded-lg  overflow-hidden '>
                                <Skeleton
                                    height={'256px'}
                                    isLoaded={!isLoading}
                                    fadeDuration={5}>

                                    <img className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-125    rounded-md h-full w-full' src={ SMALL_IMAGE_PATH + content.poster_path || SMALL_IMAGE_PATH + content.backdrop_path} alt="" />

                                </Skeleton>

                            </div>


                            <div>
                                {isLoading ? <SkeletonText noOfLines={1} skeletonHeight={4} /> : content.title || content.name}

                            </div>


                        </Link>
                    ))}


                </div>


            </div>
        </div>
    )
}

export default Details
