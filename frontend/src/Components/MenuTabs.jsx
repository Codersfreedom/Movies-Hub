import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import { Clapperboard, Clipboard, Flame, History, House, ListVideo, Tv, User } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const MenuTabs = () => {
    const router = useLocation()
    return (

        <div className=' sm:hidden sticky left-0 bottom-0 w-full bg-gray-200 dark:bg-primary-dark dark:text-white z-999'>

            <Tabs className='w-full' >
                <TabList className='flex justify-center items-center w-full'>
                    <Tab>
                        <Link to="/" className={`w-full hover:text-purple-600   transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/' && 'mobile-active'} `}

                        >
                            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                                <House size={20} />

                            </div>
                        </Link>

                    </Tab>
                    <Tab>
                        <Link to="/trending" className={`w-full hover:text-purple-600   transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/trending' && 'mobile-active'} `}

                        >
                            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                                <Flame size={20} />

                            </div>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/movies" className={`w-full hover:text-purple-600   transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/movies' && 'mobile-active'} `}

                        >
                            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                                <Clapperboard size={20} />

                            </div>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/tv" className={`w-full hover:text-purple-600   transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/tv' && 'mobile-active'} `}

                        >
                            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                                <Tv size={20} />

                            </div>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/history" className={`w-full hover:text-purple-600  transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/history' ? 'mobile-active' : ''}`}
                        >
                            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                                <History size={20} />


                            </div>

                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/watchlist" className={`w-full hover:text-purple-600   transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/watchlist' ? 'mobile-active' : ''}`}
                        >
                            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                                <ListVideo size={20} />


                            </div>
                        </Link>
                    </Tab>

                    <Tab>
                        <Link to='/profile' className={`w-full hover:text-purple-600   transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/profile' ? 'mobile-active' : ''}`}>
                            <div className='flex justify-center cursor-pointer items-center flex-col gap-1 w-full'>
                                <User size={20} />
                            </div>
                        </Link>
                    </Tab>
                </TabList>

                <TabPanels className='bg-gray-300 dark:bg-primary-dark'>
                    <TabPanel>
                        <p className='text-xs '>Home</p>
                    </TabPanel>
                    <TabPanel>
                        <p className='text-xs '>Trending</p>
                    </TabPanel>
                    <TabPanel>
                        <p className='text-xs '>Movies</p>
                    </TabPanel>
                    <TabPanel>
                        <p className='text-xs '>Tv</p>
                    </TabPanel>

                    <TabPanel>
                        <p className='text-xs '>History</p>
                    </TabPanel>
                    <TabPanel>
                        <p className='text-xs '>WatchList</p>
                    </TabPanel> 
                    <TabPanel>
                        <p className='text-xs '>Profile</p>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </div >

    )
}

export default MenuTabs
