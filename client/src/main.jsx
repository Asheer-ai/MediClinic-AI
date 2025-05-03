import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'

const router=createBrowserRouter([
  {
    path: '/auth/signup',
    element: <SignUpPage />,
  },
  {
    path:'/',
    element:<LandingPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>
  </StrictMode>,
)
