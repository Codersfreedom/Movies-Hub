import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import CardSwiper from '../Components/CardSwiper'
import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'

import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'
import { Check, Heart, LucidePlay, Star } from 'lucide-react'
import { useContentStore } from '../store/UseContentStore'
import useGetDetails from '../hooks/useGetDetails'
import { ORIGINAL_IMAGE_PATH, SMALL_IMAGE_PATH } from '../utils/constants'
import useFetchReviews from '../hooks/useFetchReviews'
import useFetchSimilar from '../hooks/useFetchSimilar'
import useAddToWatchList from '../hooks/useAddToWatchList'
import { useWatchListStore } from '../store/useWatchListStore'
import useFetchWatchList from '../hooks/useFetchWatchList'
import useDelelteWatchList from '../hooks/useDeleteWatchList'
import useFetchTrailer from '../hooks/useFetchTrailer'
import ReactPlayer from 'react-player/youtube'
import { useAuthStore } from '../store/useAuthSotre'
import toast from 'react-hot-toast'

const Details = ({ pageName }) => {


    const { id } = useParams();

    const { getDetails } = useGetDetails();
    const { fetchReviews, reviews } = useFetchReviews()
    const { fetchSimilar, similar } = useFetchSimilar()
    const { fetchWatchList } = useFetchWatchList();
    const { addToWatchList } = useAddToWatchList()
    const { deleteWatchList } = useDelelteWatchList();
    const { fetchTrailer, isLoading: trailerLoading, trailer } = useFetchTrailer()

    const { authUser } = useAuthStore();
    const { isLoading, contentDetails } = useContentStore();
    const { wishList, isSuccess } = useWatchListStore();


    const [isPlaying, setIsPlaying] = useState(false);
    const [isAlreadyAddedToWishList, setIsAlreadyAddedToWishList] = useState(false);



    useEffect(() => {
        getDetails(id, pageName);
        fetchReviews(id, pageName);
        fetchSimilar(id, pageName);
        fetchWatchList();
    }, [id])


    useEffect(() => {
        if (wishList.length > 0) {

            setIsAlreadyAddedToWishList(wishList?.some((item) => item.id == id))
        }

    }, [id])


    useEffect(() => {
        setIsPlaying(false);
    }, [id])





    // Add to wishlist functionality 
    const handleAddToWatchList = () => {

        if (!authUser) return toast.error("Please login to add watchlist")

        if (isAlreadyAddedToWishList) {
            deleteWatchList(id)
            setIsAlreadyAddedToWishList(false);
        } else {

            addToWatchList(id, pageName, contentDetails.title || contentDetails.name, contentDetails.poster_path || contentDetails.backdrop_path)

            setIsAlreadyAddedToWishList(true)
        }
    }

    console.log('watchlist', isAlreadyAddedToWishList)
    // video play functionality 
    const handlePlay = () => {
        setIsPlaying(true);
        fetchTrailer(id, pageName);
    }
    let url;
    if (trailer && trailer.length > 0) {
        url = `https://www.youtube.com/watch?v=${trailer[trailer.length - 1].key}`
    }

    if (Object.keys(contentDetails).length == 0 || isLoading) {
        return (
            <div className="loader-container">
                <div className="bouncing-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative mx-auto overflow-hidden'>
            <Header />
            <LeftSideBar />
            {/* Content start */}
            <div className='w-full min-h-full flex flex-col '>
                {/* Banner */}
                <div className='relative h-[80vh] max-sm:h-[30vh] max-w-screen  xl:ml-16 max-sm:ml-0 rounded-md' >
                    {!isPlaying ? (
                        <>
                            <img className='max-h-full  w-full object-cover ' src={contentDetails.backdrop_path !== null ? ORIGINAL_IMAGE_PATH + contentDetails.backdrop_path : ORIGINAL_IMAGE_PATH + contentDetails.poster_path} alt='poster' />
                            <div className='absolute bottom-5 left-5 flex flex-col gap-2'>
                                <h1 className=' text-white text-4xl max-sm:text-xl'>{contentDetails?.title || contentDetails.name}</h1>
                                <div className='flex gap-2 text-white'>
                                    <h2 >{contentDetails.genres[0].name}</h2> <span>●</span> <span>{contentDetails.release_date ? contentDetails.release_date.split("-")[0] : contentDetails.first_air_date.split("-")[0]}</span> <span>●</span> <span>{contentDetails.adult ? "18+" : "PG-13"}</span>

                                </div>
                            </div>
                        </>
                    ) : (trailer && trailer.length > 0 ?
                        (
                            <Skeleton isLoaded={!trailerLoading} className='max-w-full h-full '>
                                <ReactPlayer className="aspect-video" width='98%' height='100%' url={url} controls />
                            </Skeleton>
                        ) :
                        (!trailerLoading && trailer && trailer.length === 0 && (

                            <div className='flex items-center justify-center h-full w-full'>
                                <h2 className='text-xl text-center'>Sorry no trailer is available for this {pageName.charAt(0) + pageName.substring(1)}</h2>
                            </div>


                        )

                        )




                    )}

                    {!isPlaying && <LucidePlay className='absolute top-[30%] xl:top-1/2 right-[50%]   transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer text-white'
                        onClick={handlePlay}
                        size={60} />}
                </div>
                {/* Rating section */}
                <div className='w-full  justify-center items-start flex flex-col ml-24 max-sm:ml-10 mt-5 gap-5'>

                    <div className='flex gap-4 justify-center items-center'>

                        <div className='h-10 w-24 rounded-lg bg-slate-500 text-white  flex justify-center items-center gap-1  px-3'>
                            <Star size={20} color='yellow' /> {contentDetails.vote_average}
                        </div>

                        <div className='flex justify-center items-center  gap-2'>
                            <Heart className='rounded-full hover:cursor-pointer hover:bg-slate-500 transition-colors text-red-600 h-12 w-12 p-3' size={30}
                                onClick={handleAddToWatchList}
                                fill={isAlreadyAddedToWishList ? 'red' : "none"}
                            />
                            <Check className='rounded-full hover:cursor-pointer hover:bg-slate-500 transition-colors text-green-400 h-12 w-12 p-3' size={30} />

                        </div>
                    </div>
                    {/* Overview section */}
                    <div className='w-11/12 h-fit flex max-sm:flex-col-reverse  gap-8 justify-between mt-5 pr-2' >
                        <div className='text-justify w-1/2 max-sm:text-wrap max-sm:w-full pr-10'>

                            {contentDetails?.overview}
                        </div>
                        <div className='flex flex-col w-1/2 items-start gap-2 max-sm:w-full justify-start'>
                            <h2 className='text-2xl font-bold mb-3 text-start'>Genre</h2>
                            <div className='flex gap-2 w-full h-fit justify-start items-center flex-wrap '>
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


                <div className=' reviews flex h-[300px]  w-full justify-center ml-5 mt-5 max-sm:hidden ' >
                    <CardSwiper reviews={reviews} />

                </div>
                {/* Similar content */}
                <h1 className='ml-24 mt-10 text-2xl font-bold max-sm:ml-10'>Similar</h1>
                <div className='similar ml-24 mt-6  grid-content max-sm:ml-10'>
                    {similar.map((content, index) => (

                        <Link key={index} to={`/${pageName}/${content.id}`} className='flex h-80 w-52 max-sm:h-56 max-sm:w-32 max-sm:gap-1 flex-col gap-3 group   '>
                            <div className='w-full h-4/5  rounded-lg  overflow-hidden '>
                                <Skeleton
                                    height={'256px'}
                                    isLoaded={!isLoading}
                                    fadeDuration={5}>

                                    <img className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-125    rounded-md h-full w-full' src={SMALL_IMAGE_PATH + content.poster_path || SMALL_IMAGE_PATH + content.backdrop_path} alt="" />

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
