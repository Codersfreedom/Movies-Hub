import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <Header isAuthPage={true} />

      <div className='w-screen h-screen flex justify-center items-center dark:bg-primary-dark dark:text-white'>
        <div className='flex flex-col gap-4 w-1/2  justify-start items-center'>
          <h1 className='text-4xl font-bold'>Sign up</h1>
          <div className='flex flex-col gap-3'>
            <input type="text"  placeholder='Username' className='py-2 px-3 rounded-md border-2 border-gray-300 focus:outline-none' />
            <input type="email"  placeholder='Email' className='py-2 px-3 rounded-md border-2 border-gray-300 focus:outline-none' />
            <input type="password"  placeholder='Password' className='py-2 px-3 rounded-md border-2 border-gray-300 focus:outline-none' />
            <input type="password"  placeholder='Confirm Password' className='py-2 px-3 rounded-md border-2 border-gray-300 focus:outline-none' />
            <button className='bg-slate-500 text-white py-2 px-3 rounded-md'>Sign up</button>
          </div>
          <h2>Already have an account? <Link to='/login'>Login now </Link></h2>
        </div>
      </div>
    </div>
  )
}

export default Signup
