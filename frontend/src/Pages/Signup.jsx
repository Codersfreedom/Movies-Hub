import { useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signup } = useSignup();

  const handleSignup = () => {
    signup({ username, email, password });
  }
  return (
    <div>
      <Header isAuthPage={true} />

      <div className='w-screen h-screen flex justify-center items-center dark:bg-primary-dark  '>
        <div className='flex flex-col gap-4 w-1/2  justify-start items-center'>
          <h1 className='text-4xl font-bold'>Sign up</h1>
          <div className='flex flex-col gap-3'>
            <input type="text" placeholder='Username' className='py-2 px-3 rounded-md border-2 text-black  border-gray-300 focus:outline-none'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input type="email" placeholder='Email' className='py-2 px-3 rounded-md border-2 text-black  border-gray-300 focus:outline-none'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder='Password' className='py-2 px-3 rounded-md text-black border-2 border-gray-300 focus:outline-none'
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className='bg-slate-500 text-white py-2 px-3 rounded-md' onClick={handleSignup}>Sign up</button>
          </div>
          <h2>Already have an account? <Link to='/login'> <span className='text-purple-500'>Login now</span> </Link></h2>
        </div>
      </div>
    </div>
  )
}

export default Signup
