import React, { useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useLogin();
  const user ={
    email,
    password
  }
  const handleSubmit = () => {
    if (!email || !password) {
      return toast.error("All fields are required");
    }
    login(user);
   
  }
  return (
    <div>
      <Header isAuthPage={true} />

      <div className='w-screen h-screen flex justify-center items-center dark:bg-primary-dark'>
        <div className='flex flex-col gap-4 w-1/2  justify-start items-center'>
          <h1 className='text-4xl font-bold'>Login</h1>
          <div className='flex flex-col gap-3'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Email' className='py-2 px-3 rounded-md border-2 text-black border-gray-300 focus:outline-none'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Password' className='py-2 px-3 rounded-md text-black border-2 border-gray-300 focus:outline-none'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='bg-slate-500 text-white py-2 px-3 rounded-md'
              onClick={handleSubmit}
            >Login</button>
          </div>
          <h2>New here? <Link to='/signup'> <span className='text-purple-500'>Register now</span> </Link></h2>
        </div>
      </div>
    </div>
  )
}

export default Login
