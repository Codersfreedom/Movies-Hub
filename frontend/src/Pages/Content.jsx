import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'

import { useEffect, useState } from "react"
import { useContentStore } from "../store/UseContentStore"
import useFetchTrending from "../hooks/useFetchTrending"


import Card from "../Components/Card"
import useFetchCategories from "../hooks/useFetchCategories"
import { ORIGINAL_IMAGE_PATH } from '../utils/constants'
import { Skeleton } from '@chakra-ui/skeleton'




const Content = ({ pageName }) => {

    const [type, setType] = useState("all");
    const [movieGenre, setMovieGenre] = useState("now_playing");
    const [tvGenre, setTvGenre] = useState("airing_today")

    const { isLoading, trendingContent, categoryContent } = useContentStore();

    const { fetchTrending } = useFetchTrending();
    const { fetchCategories } = useFetchCategories()

    useEffect(() => {
        if (pageName == "trending") {
            fetchTrending(type);
        }
    }, [type])


    useEffect(() => {
        if (pageName == "movie") {
            fetchCategories(movieGenre, pageName);
        } else {
            fetchCategories(tvGenre, pageName)
        }
    }, [movieGenre, tvGenre, pageName])



    if (isLoading) {
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

    let imageURL;

    if (pageName === 'trending') {
        imageURL = trendingContent[Math.floor(Math.random() * trendingContent.length)]?.backdrop_path;
    } else {
        imageURL = categoryContent[Math.floor(Math.random() * categoryContent.length)]?.backdrop_path;
    }


    return (
        <div className='min-h-screen min-w-full max-sm:w-full dark:bg-body-dark dark:text-white  mt-16 relative pr-10'>
            <Header />
            <LeftSideBar />

            <div className='w-full h-full flex  flex-col pr-4 '>

                {!isLoading ? (
                    <div className='relative h-[70vh] max-sm:h-[50vh] max-sm:w-[92%]  w-full  ml-16 max-sm:ml-10 poster  rounded-md' >
                        <img className='h-full w-full max-sm:rounded-md object-cover' src={ORIGINAL_IMAGE_PATH + imageURL} alt="" />
                        <h1 className='absolute text-white text-4xl bottom-3 left-9'>{pageName.charAt(0).toUpperCase() + pageName.substring(1)}</h1>
                    </div>
                ) : (
                    <Skeleton height={'600px'} width={'1456px'} />
                )

                }


                <div className='w-full ml-24 max-sm:ml-10  flex justify-start gap-2 mt-3 flex-wrap max-sm:pr-10 '>

                    {pageName === 'trending' && (
                        <>
                            <button className={` px-2 py-2  max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all  rounded-2xl ${type === "all" ? "bg-purple-600 " : "bg-slate-400"}`} onClick={() => setType("all")}>All</button>
                            <button className={` px-2 py-2  max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${type === "movie" ? "bg-purple-600 " : "bg-slate-400"}`} onClick={() => setType("movie")}>Movies</button>
                            <button className={` px-2 py-2  max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${type === "tv" ? "bg-purple-600 " : "bg-slate-400"}`} onClick={() => setType("tv")} >Tv Shows</button>
                        </>)
                    }

                    {pageName === 'movie' && (
                        <>

                            <button className={` px-2 py-2   max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${movieGenre === "now_playing" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setMovieGenre("now_playing")} > Now Playing</button>
                            <button className={` px-2 py-2   max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${movieGenre === "popular" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setMovieGenre("popular")} > Popular</button>
                            <button className={` px-2 py-2   max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${movieGenre === "top_rated" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setMovieGenre("top_rated")} > Top Rated</button>
                            <button className={` px-2 py-2   max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${movieGenre === "upcoming" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setMovieGenre("upcoming")} > Upcoming</button>
                        </>
                    )}

                    {pageName === 'tv' &&
                        <>
                            <button className={` px-2 py-2    max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${tvGenre === "airing_today" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setTvGenre("airing_today")} > Airing Today</button>
                            <button className={` px-2 py-2    max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${tvGenre === "on_the_air" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setTvGenre("on_the_air")} > On The Air</button>
                            <button className={` px-2 py-2    max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${tvGenre === "popular" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setTvGenre("popular")} > Popular</button>
                            <button className={` px-2 py-2    max-sm:text-sm text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${tvGenre === "top_rated" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setTvGenre("top_rated")} > Top Rated</button>
                        </>
                    }


                </div>

                <div className=' grid-content w-full  ml-24 max-sm:ml-12 mt-6'>

                    {Object.keys(trendingContent).length > 0 && pageName === "trending" && trendingContent.map((content) => (
                        <Card key={content.id} content={content} type={content.media_type} />

                    ))}


                    {Object.keys(categoryContent).length > 0 && pageName === "movie" && categoryContent.map((content) => (
                        <Card key={content.id} content={content} type={pageName} />

                    ))}

                    {Object.keys(categoryContent).length > 0 && pageName === "tv" && categoryContent.map((content) => (
                        <Card key={content.id} content={content} type={pageName} />
                    ))}

                </div>

            </div>


        </div>
    )
}

export default Content
