import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'

import { useEffect, useState } from "react"
import { useContentStore } from "../store/UseContentStore"
import useFetchTrending from "../hooks/useFetchTrending"


import Card from "../Components/Card"
import useFetchCategories from "../hooks/useFetchCategories"
import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'



const Content = ({ pageName }) => {

    const [type, setType] = useState("all");
    const [genre, setGenre] = useState("now_playing");

    const { isLoading, trendingContent, categoryContent } = useContentStore();

    const { fetchTrending } = useFetchTrending();
    const { fetchCategories } = useFetchCategories()

    useEffect(() => {
        if(pageName =="trending"&& Object.keys(trendingContent).length !=0 && type != "all"){
           

            fetchTrending(type);
        }
    }, [type])


    useEffect(() => {
        if(pageName =="movie"){
            
            fetchCategories(genre, pageName);

        }
    }, [genre])

  

    if (isLoading) {
        return (
            <div class="loader-container">
            <div class="bouncing-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
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
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all  rounded-2xl ${type === "all" ? "bg-purple-600 " : "bg-slate-400"}`} onClick={() => setType("all")}>All</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${type === "movie" ? "bg-purple-600 " : "bg-slate-400"}`} onClick={() => setType("movie")}>Movies</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${type === "tv" ? "bg-purple-600 " : "bg-slate-400"}`} onClick={() => setType("tv")} >Tv Shows</button>
                        </>)
                    }

                    {pageName === 'movie' && (
                        <>

                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${genre === "now_playing" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setGenre("now_playing")} > Now Playing</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${genre === "popular" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setGenre("popular")} > Popular</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${genre === "top_rated" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setGenre("top_rated")} > Top Rated</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${genre === "upcoming" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setGenre("upcoming")} > Upcoming</button>
                        </>
                    )}

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

                    {pageName === "trending" && trendingContent.map((content) => (
                        <Card key={content.id} content={content} type={content.media_type} />

                    ))}


                    {pageName === "movie" && categoryContent.map((content) => (
                        <Card key={content.id} content={content} type={pageName} />

                    ))}


                </div>

            </div>


        </div>
    )
}

export default Content
