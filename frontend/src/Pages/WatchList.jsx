import React, { useEffect } from 'react'
import Header from '../Components/Header';
import LeftSideBar from '../Components/LeftSideBar';
import useFetchWatchList from '../hooks/useFetchWatchList';
import { useWatchListStore } from '../store/useWatchListStore';
import { Link } from 'react-router-dom';
import { Skeleton, SkeletonText } from '@chakra-ui/skeleton';
import { Trash } from 'lucide-react';
import { SMALL_IMAGE_PATH } from '../utils/constants';
import useDelelteWatchList from '../hooks/useDeleteWatchList';

const WatchList = () => {

    const { wishList,isLoading,setWishList } = useWatchListStore();

    const { fetchWatchList } = useFetchWatchList();
    const {deleteWatchList} = useDelelteWatchList();


    useEffect(() => {
        fetchWatchList();
    }, [])

   
    const handleDelete = (e, id) => {
        e.preventDefault();
        deleteWatchList(id)
        setWishList(wishList.filter((item)=>item.id != id));

    }
    return (
        <div className="min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative  ">
            <Header />
            <LeftSideBar />
            <div className="w-full flex items-center justify-start flex-col mt-5 p-5">
                <h1 className='text-4xl ml-36 text-start max-sm:ml-0 max-sm:text-2xl '>WatchList</h1>
                <div className="w-4/5 h-fit  mt-12 rounded-md flex justify-center items-center">
                    {wishList.length > 0 ?

                        (<>
                            <div className="w-screen min-h-56   rounded-md grid-content lg:grid-cols-5 md:grid-cols-3 gap-4 ">
                                {
                                    wishList?.map((item, index) => (
                                        <Link to={`/${item.type}/${item.id}`} key={index} className='flex h-80 w-52 max-sm:h-56 max-sm:w-32 max-sm:gap-3 flex-col gap-3 group'>
                                            <div className='w-full h-4/5 relative  rounded-lg  overflow-hidden '>
                                                <Skeleton
                                                    height={'256px'}
                                                    isLoaded={!isLoading}
                                                    fadeDuration={5}>

                                                    <img className='object-cover rounded-md h-full w-full transition-transform ease-in-out duration-300 group-hover:scale-125' title={item.title} src={SMALL_IMAGE_PATH + item.image} alt="" />
                                                    <Trash className="absolute top-2 right-2 text-black p-1 hidden group-hover:block rounded-md bg-slate-200" size={25}
                                                        onClick={(e) => handleDelete(e, item.id)}
                                                    />
                                                </Skeleton>

                                            </div>


                                            <div>
                                                {isLoading ? <SkeletonText className="font-semibold text-xs dark:text-white " noOfLines={1} skeletonHeight={4} /> : item.title}

                                            </div>


                                        </Link>
                                    ))
                                }






                            </div>
                        </>) : <h1 className='text-2xl'>Hey! try adding some movies or shows here🙂</h1>}

                </div>

            </div>

        </div>
    )
}

export default WatchList
