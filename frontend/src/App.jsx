import { Navigate, Routes, Route } from 'react-router-dom'
import LandingPage from '../src/pages/landingpage/LandingPage.jsx'
import SignUp from './pages/auth/signup/SignUp.jsx';
import Login from './pages/auth/Login/Login.jsx';
import GenericLayout from '../src/layout/GenericLayout.jsx'
import Home from '../src/pages/home/Home.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx';
import DetailsPage  from './pages/landingpage/DetailsPage.jsx';
import HomePage from './pages/landingpage/HomePage.jsx';
import Contact from './pages/landingpage/Contact.jsx';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './components/common/LoadingSpinner.jsx'

function App() {
  const {data: authUser, isLoading} = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();

        if(data.error) return null;
        if(!res.ok){
          throw new Error(data.error);
        }
        return data;
      } catch (error) {
        throw error;
        
      };
    },
    retry: false,
  });

  if(isLoading){
    return (
      <div className='h-screen flex justify-center items-center'>
        <LoadingSpinner size='lg'/>
      </div>
    )
  }
  return (
    <div className='flex max-w-6xl mx-auto'>
      <Routes>
        <Route path="/details" element={!authUser ? <DetailsPage /> : <Navigate to='/home'/>} />  
        <Route path="/homepage" element={!authUser ? <HomePage /> : <Navigate to='/home'/>} /> 
        <Route path="/contact" element={!authUser ? <Contact /> : <Navigate to='/home'/>} /> 

        <Route path='/' element={!authUser ? <LandingPage /> : <Navigate to='/home'/>} />
        <Route path='/signup' element={!authUser ? <SignUp /> : <Navigate to='/home'/>} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to='/home'/>} />

        <Route element={<GenericLayout />}>

        <Route path='/home' element={authUser ? <Home /> : <Navigate to='/login'/>} />
        <Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App
