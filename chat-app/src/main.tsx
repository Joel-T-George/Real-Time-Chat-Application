import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import User from './../components/User'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <User />
    <App />
  </React.StrictMode>,
)
