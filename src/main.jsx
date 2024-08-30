// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import 'modern-normalize'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import "modern-normalize";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
