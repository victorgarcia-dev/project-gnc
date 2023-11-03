import {Route, Routes, Navigate} from 'react-router-dom';

import { Home } from '../pages';

export const GncAppRoutes = () => {
  return (
    <>

        <Routes>
            <Route path='home'  element={ <Home/> }/>

            <Route path='/'  element={ <Navigate to="/home"/> }/>
            <Route path='*'  element={ <Navigate to="/home"/> }/>
        </Routes>
    </>
  )
}
