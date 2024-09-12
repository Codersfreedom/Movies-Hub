import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import { Clapperboard, Clipboard, Flame, House, Tv } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const MenuTabs = () => {
    const router = useLocation()
    return (

        <div className=' sm:hidden sticky left-0 bottom-0 w-full dark:bg-primary-dark dark:text-white z-999'>

            <Tabs className='w-full' >
                <TabList className='flex justify-center items-center w-full'>
                    <Tab>
                        <Link to="/" className={`w-full hover:text-purple-600 hover:border-b-2 hover:border-b-purple-600  transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/' && 'mobile-active'} `}

                        >
                            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                                <House size={20} />

                            </div>
                        </Link>

                    </Tab>
                    <Tab>
                        <Link to="/trending" className={`w-full hover:text-purple-600 hover:border-b-2 hover:border-b-purple-600  transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/movies' && 'mobile-active'} `}

                        >
                            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                                <Flame size={20} />

                            </div>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/movies" className={`w-full hover:text-purple-600 hover:border-b-2 hover:border-b-purple-600  transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/trending' && 'mobile-active'} `}

                        >
                            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                                <Clapperboard size={20} />

                            </div>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/tv" className={`w-full hover:text-purple-600 hover:border-b-2 hover:border-b-purple-600  transition-all duration-300 ease-in-out  cursor-pointer ${router.pathname === '/trending' && 'mobile-active'} `}

                        >
                            <div className='flex justify-center items-center flex-col gap-1 w-full'>
                                <Tv size={20} />

                            </div>
                        </Link>
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p className='text-xs '>Home</p>
                    </TabPanel>
                    <TabPanel>
                        <p className='text-xs '>Trending</p>
                    </TabPanel>
                    <TabPanel>
                        <p className='text-xs '>Movies</p>
                    </TabPanel><TabPanel>
                    <p className='text-xs '>Tv</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div >

    )
}

export default MenuTabs
