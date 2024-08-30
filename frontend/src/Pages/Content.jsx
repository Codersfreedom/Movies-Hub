import React from 'react'
import Header from '../Components/Header'
import LeftSideBar from '../Components/LeftSideBar'
import { Link } from 'react-router-dom'

const Content = ({ pageName }) => {
    return (
        <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white  mt-16 relative mx-auto'>
            <Header />
            <LeftSideBar />

            <div className='w-full h-full flex  flex-col '>

                <div className='relative h-96  w-full  ml-16  rounded-md bg-purple-400' >
                    <img className='h-full w-full object-cover' src="wallpaperflare.jpg" alt="" />
                    <h1 className='absolute text-white text-4xl bottom-3 left-9'>Movies</h1>
                </div>

                <div className='w-full ml-24 mx-auto flex justify-start gap-3 mt-3 '>
                    <button className='w-32 h-10 text-white cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl'>New Release</button>
                    <button className='w-32 h-10 text-white cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl' >Action</button>
                    <button className='w-32 h-10 text-white  cursor-pointer bg-slate-600 hover:bg-slate-500 transition-all rounded-2xl'>Comedy</button>
                </div>

                <div className='min-w-4/5  ml-24 mt-6 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-0 mr-12'>

                    <Link to="/" className='flex h-80 w-52 flex-col gap-3   '>
                        <div className='w-full h-4/5 transition-transform hover:border-2 rounded-lg hover:border-white '>
                            <img className='object-cover    rounded-md h-full w-full' src="wallpaper1.png" alt="" />

                        </div>
                        <div>
                            Movie name
                        </div>
                    </Link>

                    <Link to="/" className='flex h-80 w-52 flex-col gap-3 '>
                        <div className='w-full h-4/5'>
                            <img className='object-cover rounded-md h-full w-full' src="wallpaper1.png" alt="" />

                        </div>
                        <div>
                            Movie name
                        </div>
                    </Link>
                    <Link to="/" className='flex h-80 w-52 flex-col gap-3 '>
                        <div className='w-full h-4/5'>
                            <img className='object-cover rounded-md h-full w-full' src="wallpaper1.png" alt="" />

                        </div>
                        <div>
                            Movie name
                        </div>
                    </Link>
                    <Link to="/" className='flex h-80 w-52 flex-col gap-3 '>
                        <div className='w-full h-4/5'>
                            <img className='object-cover rounded-md h-full w-full' src="wallpaper1.png" alt="" />

                        </div>
                        <div>
                            Movie name
                        </div>
                    </Link>
                    <Link to="/" className='flex h-80 w-52 flex-col gap-3 '>
                        <div className='w-full h-4/5'>
                            <img className='object-cover rounded-md h-full w-full' src="wallpaper1.png" alt="" />

                        </div>
                        <div>
                            Movie name
                        </div>
                    </Link>
                    <Link to="/" className='flex h-80 w-52 flex-col gap-3 '>
                        <div className='w-full h-4/5'>
                            <img className='object-cover rounded-md h-full w-full' src="wallpaper1.png" alt="" />

                        </div>
                        <div>
                            Movie name
                        </div>
                    </Link>
                    <Link to="/" className='flex h-80 w-52 flex-col gap-3 '>
                        <div className='w-full h-4/5'>
                            <img className='object-cover rounded-md h-full w-full' src="wallpaper1.png" alt="" />

                        </div>
                        <div>
                            Movie name
                        </div>
                    </Link>
                </div>

            </div>


        </div>
    )
}

export default Content
