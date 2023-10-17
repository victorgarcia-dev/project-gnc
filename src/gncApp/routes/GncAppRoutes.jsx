import {Route, Routes, Navigate} from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';

import { Contact, Home, Service } from '../pages';

export const GncAppRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='home'  element={ <Home/>}/>
            <Route path='service'  element={ <Service/>}/>
            <Route path='contact'  element={ <Contact/>}/>

            <Route path='/'  element={ <Navigate to="/home"/>}/>
            <Route path='*'  element={ <Navigate to="/home"/>}/>
        </Routes>
    </>
  )
}
