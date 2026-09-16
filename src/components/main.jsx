import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './global.css'
import './our-team.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
