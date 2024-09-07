import React from 'react'
import Header from '../Components/Header';
import LeftSideBar from '../Components/LeftSideBar';

const WatchList = () => {
    const history = {};
    const isLoading = false;

    const handleDelete = (e, id) => {

    }
    return (
        <div className="min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative  ">
            <Header />
            <LeftSideBar />
            <div className="w-full flex items-center justify-start flex-col mt-5 p-5">
                <h1 className='text-4xl ml-36 self-start '>WatchList</h1>
                <div className="w-4/5 h-fit  mt-12 rounded-md flex justify-center items-center">
                    {Object.keys(history).length > 0 ?

                        (<>
                            <div className="w-screen min-h-56   rounded-md grid  p-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
                                {
                                    history?.map((item, index) => (
                                        <Link to={`/${item.searchType}/${item.id}`} key={index} className='flex h-80 w-52 flex-col gap-3 group'>
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
