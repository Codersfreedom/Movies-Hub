import { Clapperboard, Flame, History, House, Settings, Tv } from 'lucide-react'
import { Link } from 'react-router-dom'

const LeftSideBar = () => {
    return (
        <div className='h-screen w-16 flex justify-start flex-col gap-4 items-center py-3  dark:text-white dark:bg-primary-dark  bg-gray-200 text-black border-r-2 border-r-global-border fixed  z-40'>

            <Link to="/" className='w-full hover:text-purple-600 hover:border-r-2 hover:border-r-purple-600 transition-all cursor-pointer '>
            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                <House size={20} />
                <p className='text-xs '>Home</p>
            </div>
            </Link>

            <Link to="trending" className='w-full hover:text-purple-600 hover:border-r-2 hover:border-r-purple-600 cursor-pointer '>
            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                <Flame size={20} />
                <p className='text-xs '>Trending</p>
            </div>
            </Link>

            <Link to="/movies" className='w-full hover:text-purple-600 hover:border-r-2 hover:border-r-purple-600 cursor-pointer '>
            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                <Clapperboard size={20} />
                <p className='text-xs '>Movies</p>
            </div>
            </Link>

            <Link to="/tv" className='w-full hover:text-purple-600 hover:border-r-2 hover:border-r-purple-600 cursor-pointer '>
                <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                    <Tv size={20} />
                    <p className='text-xs '>Tv</p>

                </div>
            </Link>

                <Link to="/history" className='w-full hover:text-purple-600 hover:border-r-2 hover:border-r-purple-600 cursor-pointer '>
            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                <History size={20} />
                    <p className='text-xs '>History</p>

            </div>
                </Link>

                <Link to="/profile/settings" className='w-full hover:text-purple-600 hover:border-r-2 hover:border-r-purple-600 cursor-pointer '>
            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                <Settings size={20} />
                    <p className='text-xs '>Settings</p>
            </div>
                </Link>



        </div>
    )
}

export default LeftSideBar
