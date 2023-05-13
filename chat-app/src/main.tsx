import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import User from './../components/User'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <User />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
