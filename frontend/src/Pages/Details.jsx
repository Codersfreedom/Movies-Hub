import { Link } from 'react-router-dom'
import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'
import CardSwiper from '../Components/CardSwiper'
import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'

import { Check,  Heart, Star,  Volume2, VolumeOff } from 'lucide-react'
import { useState } from 'react'

const Details = () => {
    const [isLoading,setIsLoading] = useState(true);

    return (
        <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative mx-auto'>
            <Header />
            <LeftSideBar />
            {/* Content start */}
            <div className='w-full h-full flex flex-col'>
                {/* Banner */}
                <div className='relative h-full  w-full  ml-16  rounded-md' >
                    <img className='h-full w-full object-cover' src="../public/wallhaven.jpg" alt="" />
                    <div className='absolute bottom-3 left-9 flex flex-col gap-2'>
                        <h1 className=' text-white text-4xl '>Movie name</h1>
                        <div className='flex gap-2 text-white'>
                            <h2 >Genre</h2> <span>●</span> <span>Year</span> <span>●</span> <span>Duration</span>

                        </div>
                    </div>
                    <Volume2 className='rounded-full absolute right-20 bottom-3  hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-12 w-12 p-3' size={30} />
                    <VolumeOff className='rounded-full hidden absolute right-20 bottom-3  hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-12 w-12 p-3' size={30} />

                </div>
                {/* Rating section */}
                <div className='w-full  justify-center items-start flex flex-col ml-24 mt-5 gap-5'>

                    <div className='flex gap-4 justify-center items-center'>

                        <div className='h-10 w-24 rounded-lg bg-slate-500 flex justify-center items-center gap-1  px-3'>
                            <Star size={20} /> Rating
                        </div>

                        <div className='flex justify-center items-center  gap-2'>
                            <Heart className='rounded-full hover:cursor-pointer  hover:bg-slate-500 transition-colors bg-slate-400 h-12 w-12 p-3' size={30} />
                            <Check className='rounded-full hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-12 w-12 p-3' size={30} />

                        </div>
                    </div>
                    {/* Overview section */}
                    <div className='w-4/5 h-fit flex gap-4 justify-between mt-5  ' >
                        <div className='text-justify w-9/12'>

                            Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora culpa fuga dicta placeat reiciendis et assumenda cumque, officia quasi voluptatem, aliquam repellat ullam repudiandae veniam animi sapiente ut exercitationem! aperiam tempora atque suscipit nulla nam magnam officia iusto quia. adipisicing elit. Error vitae quas iusto consequuntur.
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h2>Genre</h2>
                            <div className='flex gap-2'>
                                <button className='rounded-lg hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-10 w-16  '>Action</button>
                                <button className='rounded-lg hover:cursor-pointer hover:bg-slate-500 transition-colors bg-slate-400 h-10 w-16  '>Thriller</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reviews section */}


                <div className=' reviews flex  w-full justify-center ml-5 mt-5 ' >
                    <CardSwiper />

                </div>
                
                <h1 className='ml-24 text-2xl font-bold'>Similar</h1>
                <div className='similar ml-24 mt-6 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-0 mr-12 '>
                    <Link to="/movie/1234" className='flex h-80 w-52 flex-col gap-3   '>
                        <div className='w-full h-4/5 transition-transform hover:border-2 rounded-lg hover:border-white overflow-hidden '>
                            <Skeleton
                                height={'256px'}
                                isLoaded={isLoading}
                                fadeDuration={5}>

                                <img className='object-cover    rounded-md h-full w-full' src="/wallpaper1.png" alt="" />

                            </Skeleton>

                        </div>


                        <div>
                            {!isLoading ? <SkeletonText noOfLines={1} skeletonHeight={4} /> : "Movie Name"}

                        </div>


                    </Link>

                </div>


            </div>
        </div>
    )
}

export default Details
