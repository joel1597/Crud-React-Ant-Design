import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routing'
import './index.css'
import { AuthProvider } from './context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>,
)
