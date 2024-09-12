import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Content from './Pages/Content';
import History from './Pages/History';
import Profile from './Pages/Profile';
import Details from './Pages/Details';
import Footer from './Components/Footer';
import { useAuthStore } from './store/useAuthSotre';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import WatchList from './Pages/WatchList';
import MenuTabs from './Components/MenuTabs';


function App() {

  const { authUser, authCheck, isCheckingAuth } = useAuthStore();


  useEffect(() => {
    authCheck();
  }, [authCheck])

  if (isCheckingAuth) {
    return (
      <div className="loader-container">
        <div className="bouncing-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    )
  }

  return (
    <div className=' relative min-h-screen max-w-full max-sm:w-full dark:bg-body-dark dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to={'/'} />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to={'/'} />} />
        <Route path="/trending" element={<Content pageName={'trending'} />} />
        <Route path="/movies" element={<Content pageName={'movie'} />} />
        <Route path="/movie/:id" element={<Details pageName={'movie'} />} />
        <Route path="/tv" element={<Content pageName={'tv'} />} />
        <Route path="/tv/:id" element={<Details pageName={'tv'} />} />
        <Route path="/history" element={authUser ? <History /> : <Navigate to={'/'} />} />
        <Route path="/watchlist" element={authUser ? <WatchList /> : <Navigate to={'/'} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
      <MenuTabs />
      <Footer />

    </div>
  )
}

export default App
