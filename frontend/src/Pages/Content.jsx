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

            console.log("trending called")
            fetchTrending(type);
        }
    }, [type])


    useEffect(() => {
        if (pageName == "movie") {

            fetchCategories(movieGenre, pageName);

        }
    }, [movieGenre])

    useEffect(() => {
        if (pageName == "tv") {
            fetchCategories(tvGenre, pageName)
        }
    }, [tvGenre])


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

    if(pageName ==='trending'){
       imageURL = trendingContent[Math.floor(Math.random()*trendingContent.length)]?.backdrop_path;
    }else{
      imageURL =  categoryContent[Math.floor(Math.random()*categoryContent.length)]?.backdrop_path;
    }
    

    return (
        <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative mx-auto'>
            <Header />
            <LeftSideBar />

            <div className='w-full h-full flex  flex-col '>

                {!isLoading ? (
                    <div className='relative h-96  w-full  ml-16 poster  rounded-md' >
                    <img className='h-full w-full object-cover' src={ORIGINAL_IMAGE_PATH +  imageURL  } alt="" />
                    <h1 className='absolute text-white text-4xl bottom-3 left-9'>{pageName.charAt(0).toUpperCase() + pageName.substring(1)}</h1>
                </div>
                ):(
                    <Skeleton height={'600px'} width={'1456px'} />
                )
                
                }
                

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

                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${movieGenre === "now_playing" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setMovieGenre("now_playing")} > Now Playing</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${movieGenre === "popular" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setMovieGenre("popular")} > Popular</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${movieGenre === "top_rated" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setMovieGenre("top_rated")} > Top Rated</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${movieGenre === "upcoming" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setMovieGenre("upcoming")} > Upcoming</button>
                        </>
                    )}

                    {pageName === 'tv' &&
                        <>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${tvGenre === "airing_today" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setTvGenre("airing_today")} > Airing Today</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${tvGenre === "on_the_air" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setTvGenre("on_the_air")} > On The Air</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${tvGenre === "popular" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setTvGenre("popular")} > Popular</button>
                            <button className={`w-32 h-10 text-white cursor-pointer  hover:bg-purple-600 transition-all rounded-2xl ${tvGenre === "top_rated" ? "bg-purple-600 text-white" : "bg-slate-400"}`} onClick={() => setTvGenre("top_rated")} > Top Rated</button>
                        </>
                    }


                </div>

                <div className='min-w-4/5  ml-24 mt-6 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-0 mr-12 '>

                    { Object.keys(trendingContent).length >0 && pageName === "trending" && trendingContent.map((content) => (
                        <Card key={content.id} content={content} type={content.media_type} />

                    ))}


                    { Object.keys(categoryContent).length >0 && pageName === "movie" && categoryContent.map((content) => (
                        <Card key={content.id} content={content} type={pageName} />

                    ))}

                    { Object.keys(categoryContent).length >0 && pageName === "tv" && categoryContent.map((content)=>(
                        <Card key={content.id} content={content} type={pageName} />
                    ))}

                </div>

            </div>


        </div>
    )
}

export default Content
