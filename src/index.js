import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


import './index.css';

import App from './App';
import Lista from "./1/Lista";
import Formularz from "./2/FormularzMet";

ReactDOM.render(

  <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                      <Route path="Lista" element={<Lista />} />
                      <Route path="FormularzMet" element={<Formularz />} />
                </Route>
            </Routes>
      </BrowserRouter>
  </React.StrictMode>,

document.getElementById('root')

	)

