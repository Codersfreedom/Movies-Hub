import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Content from './Pages/Content';
import History from './Pages/History';
import Profile from './Pages/Profile';
import Details from './Pages/Details';
import Footer from './Components/Footer';


function App() {


  return (
    <div className='min-h-screen w-screen dark:bg-body-dark dark:text-white'>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/trending" element={<Content pageName={'trending'} />} />
     <Route path="/movies" element={<Content pageName={'movie'} />} />
     <Route path="/movie/:id" element={<Details pageName={'movie'}/>} />
     <Route path="/tv" element={<Content pageName={'tv'} />} />
     <Route path="/tv/:id" element={<Details pageName={'tv'} />} />
     <Route path="/history" element={<History/>} />
     <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
