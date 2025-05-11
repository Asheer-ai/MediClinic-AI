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
import PatientsPage from './pages/Admin/PatientsPage'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AddDoctors from './pages/Admin/AddDoctors'
import AddMedicalTest from './pages/Admin/AddMedicalTest'
import ProtectedRoute from './components/customs/smallComponents/ProtectedRoute'
import AppointmentPage from './pages/AppointmentPage'
import DashboardPage from './pages/DashboardPage'
import Prescription from './pages/Prescription'
import MedicalTestPage from './pages/MedicalTestPage'

const router=createBrowserRouter([
  {
    element: <ProtectedRoute><App/></ProtectedRoute>,
    children:[
      {
        path: '/home',
        element: <AppointmentPage />
      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/prescriptions',
        element: <Prescription />
      },
      {
        path: '/medical-tests',
        element: <MedicalTestPage />
      },
    ]

  },
  {
    element:<Admin/>,
    children:[
      {
        path: '/admin/add-doctor',
        element: <AddDoctors />
      },
      {
        path: '/admin/dashboard',
        element: <AdminDashboard />
      },
      {
        path: '/admin/patients',
        element: <PatientsPage />
      },
      {
        path: '/admin/add-test',
        element: <AddMedicalTest />
      }
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
