import { Routes, Route } from 'react-router-dom'
import LandingPage from '../src/pages/landingpage/LandingPage.jsx'
import SignUp from './pages/auth/signup/SignUp.jsx';
import Login from './pages/auth/Login/Login.jsx';
import GenericLayout from '../src/layout/GenericLayout.jsx'
import Home from '../src/pages/home/Home.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx';

function App() {
  return (
    <div className='flex max-w-6xl mx-auto'>
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

        <Route element={<GenericLayout />}>

        <Route path='/home' element={<Home />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
        </Route>
        
        

      </Routes>
    </div>
  );
}

export default App
