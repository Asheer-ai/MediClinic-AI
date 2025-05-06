import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import AdminLogin from './pages/Admin/AdminLogin'
import Admin from './Admin'

const router=createBrowserRouter([
  {
    element:<Admin/>,
    children:[
      
    ]
  },
  {
    path: '/auth/signin',
    element: <SignInPage />,
  },
  {
    path: '/auth/signup',
    element: <SignUpPage />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />, 
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
