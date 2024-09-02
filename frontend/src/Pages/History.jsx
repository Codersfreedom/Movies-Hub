import { useState } from "react";
import Header from "../Components/Header"
import LeftSideBar from "../Components/LeftSideBar"
import { Link } from "react-router-dom";
import { Skeleton } from "@chakra-ui/skeleton";
import Footer from "../Components/Footer";


const History = () => {
    const [history, setHistory] = useState([3]);
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative  ">
            <Header />
            <LeftSideBar />
            <div className="w-full flex items-center justify-start flex-col mt-5 p-5">
                <h1 className='text-4xl ml-36 self-start '>History</h1>
                <div className="w-4/5 h-fit bg-gray-300 mt-12 rounded-md flex justify-center items-center">
                    {history.length > 0 ?

                        (<>
                            <div className="w-screen min-h-56  bg-gray-200 rounded-md grid  p-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
                                <Link to="/movie/1234" className='flex h-80 w-52 flex-col gap-3'>
                                    <div className='w-full h-4/5 transition-transform hover:border-2 rounded-lg hover:border-white overflow-hidden '>
                                        <Skeleton
                                            height={'256px'}
                                            isLoaded={isLoading}
                                            fadeDuration={5}>

                                            <img className='object-cover rounded-md h-full w-full' title='' src="wallpaper1.png" alt="" />

                                        </Skeleton>

                                    </div>


                                    <div>
                                        {!isLoading ? <SkeletonText noOfLines={1} skeletonHeight={4} /> : "Movie Name"}

                                    </div>


                                </Link>

                                <Link to="/movie/1234" className='flex h-80 w-52 flex-col gap-3   '>
                                    <div className='w-full h-4/5 transition-transform hover:border-2 rounded-lg hover:border-white overflow-hidden '>
                                        <Skeleton
                                            height={'256px'}
                                            isLoaded={isLoading}
                                            fadeDuration={5}>

                                            <img className='object-cover rounded-md h-full w-full' title='' src="wallpaper1.png" alt="" />

                                        </Skeleton>

                                    </div>


                                    <div>
                                        {!isLoading ? <SkeletonText noOfLines={1} skeletonHeight={4} /> : "Movie Name"}

                                    </div>


                                </Link>

                                <Link to="/movie/1234" className='flex h-80 w-52 flex-col gap-3   '>
                                    <div className='w-full h-4/5 transition-transform hover:border-2 rounded-lg hover:border-white overflow-hidden '>
                                        <Skeleton
                                            height={'256px'}
                                            isLoaded={isLoading}
                                            fadeDuration={5}>

                                            <img className='object-cover rounded-md h-full w-full' title='' src="wallpaper1.png" alt="" />

                                        </Skeleton>

                                    </div>


                                    <div>
                                        {!isLoading ? <SkeletonText noOfLines={1} skeletonHeight={4} /> : "Movie Name"}

                                    </div>


                                </Link>
                                
                            </div>
                        </>) : <h1 className='text-2xl'>No History Found</h1>}

                </div>

            </div>
            
        </div>
    )
}

export default History
