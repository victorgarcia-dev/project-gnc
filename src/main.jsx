import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { GncAppRoutes} from './gncApp/routes/GncAppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <GncAppRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
)
