import {Route, Routes, Navigate} from 'react-router-dom';

import { Home } from '../pages';
import { InformationUser } from '../pages/informationUser/InformationUser';

export const GncAppRoutes = () => {
  return (
    <>

        <Routes>
            <Route path='home'  element={ <Home/> }/>

            <Route path='/'  element={ <Navigate to="/home"/> }/>
            <Route path='/informationUser'  element={ <InformationUser/> }/>
            <Route path='*'  element={ <Navigate to="/home"/> }/>
        </Routes>
    </>
  )
}
