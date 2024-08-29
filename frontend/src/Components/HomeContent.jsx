import React from 'react'
import LeftSideBar from './LeftSideBar'

const HomeContent = () => {
  return (
    <div className=' h-screen my-16 relative mx-auto'>
     <LeftSideBar />
     <div >
         <h1 className='text-4xl text-center'>Welcome to MoviesHub</h1>
     </div>
    </div>
  )
}

export default HomeContent
