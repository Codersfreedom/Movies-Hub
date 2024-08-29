import { Clapperboard, Flame, History, House, Settings, Tv } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LeftSideBar = () => {
    return (
        <div className='h-screen w-16 flex justify-start flex-col gap-4 items-center p-3  bg-zinc-400'>
            <Link to="/">
            <div className='flex justify-center  cursor-pointer items-center flex-col gap-1 w-full'>
                <House size={20} />
                <p className='text-xs '>Home</p>
            </div>
            </Link>

            <Link to="trending">
            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                <Flame size={20} />
                <p className='text-xs '>Trending</p>
            </div>
            </Link>

            <Link to="/movies">
            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                <Clapperboard size={20} />
                <p className='text-xs '>Movies</p>
            </div>
            </Link>

            <Link to="/tv">
                <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                    <Tv size={20} />
                    <p className='text-xs '>Tv</p>

                </div>
            </Link>

                <Link to="/history">
            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                <History size={20} />
                    <p className='text-xs '>History</p>

            </div>
                </Link>

                <Link to="/profile/settings">
            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                <Settings size={20} />
                    <p className='text-xs '>Settings</p>
            </div>
                </Link>



        </div>
    )
}

export default LeftSideBar
