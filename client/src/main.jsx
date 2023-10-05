import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {LoginProvider} from '../src/context/Login_Details.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
    <App />
    </LoginProvider>
  </React.StrictMode>,
)
