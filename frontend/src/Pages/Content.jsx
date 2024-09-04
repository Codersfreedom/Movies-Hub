import { Skeleton, SkeletonText } from "@chakra-ui/skeleton"
import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useContentStore } from "../store/UseContentStore"
import useFetchTrending from "../hooks/useFetchTrending"
import { SMALL_IMAGE_PATH } from "../utils/constants"

const Content = ({ pageName }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [type, setType] = useState("all");

    const { trendingContent } = useContentStore();
    const { fetchTrending } = useFetchTrending();

    useEffect(() => {
        fetchTrending(type);
    }, [type])

    if (Object.keys(trendingContent).length == 0 ) {
        return (
            <div className='h-screen w-screen bg-black'>

            </div>
        )
    }

    // console.log(trendingContent)
    return (
        <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative mx-auto'>
            <Header />
            <LeftSideBar />

            <div className='w-full h-full flex  flex-col '>

                <div className='relative h-96  w-full  ml-16  rounded-md bg-purple-400' >
                    <img className='h-full w-full object-cover' src="wallpaperflare.jpg" alt="" />
                    <h1 className='absolute text-white text-4xl bottom-3 left-9'>{pageName.charAt(0).toUpperCase() + pageName.substring(1)}</h1>
                </div>

                <div className='w-full ml-24 mx-auto flex justify-start gap-3 mt-3 '>

                    {pageName === 'trending' && (
                        <>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-slate-500 transition-all  rounded-2xl ${type ==="all" ? "bg-purple-600 text-white":"bg-slate-400"}`} onClick={() => setType("all")}>All</button>
                            <button className={`w-32 h-10 text-white cursor-pointer bg-slate-600 hover:bg-purple-600 transition-all rounded-2xl ${type ==="movie" ? "bg-purple-600 text-white":"bg-slate-400"}`} onClick={() => setType("movie")}>Movies</button>
                            <button className={`w-32 h-10 text-white cursor-pointer bg-slate-600 hover:bg-purple-600 transition-all rounded-2xl ${type ==="tv" ? "bg-purple-600 text-white":"bg-slate-400"}`} onClick={() => setType("tv")} >Tv Shows</button>
                        </>)
                    }

                    {pageName === 'movies' && <>
                        <button className='w-32 h-10 text-white cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl'>Now Playing</button>
                        <button className='w-32 h-10 text-white cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl' >Popular</button>
                        <button className='w-32 h-10 text-white  cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl'>Top Rated</button>
                        <button className='w-32 h-10 text-white  cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl'>Upcoming</button>
                    </>}

                    {pageName === 'tv' &&
                        <>
                            <button className='w-32 h-10 text-white cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl'>Airing Today</button>
                            <button className='w-32 h-10 text-white cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl' >On The Air</button>
                            <button className='w-32 h-10 text-white  cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl'>Popular</button>
                            <button className='w-32 h-10 text-white  cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl'>Top Rated</button>
                        </>
                    }


                </div>

                <div className='min-w-4/5  ml-24 mt-6 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-0 mr-12 '>

                    {trendingContent && trendingContent.map((content) => (
                        <Link to={`/${content.media_type}/${content.id}`} className='flex h-80 w-52 flex-col gap-3 group  '>
                            <div className='w-full h-4/5  rounded-lg hover:border-white overflow-hidden '>


                                <img className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-125    rounded-md h-full w-full' src={SMALL_IMAGE_PATH + content.poster_path} alt="poster" />


                            </div>


                            <div>
                                {content.title || content.name}

                            </div>


                        </Link>

                    ))}

                    {Object.keys(trendingContent).length == 0 && (
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


        </div>
    )
}

export default Content
