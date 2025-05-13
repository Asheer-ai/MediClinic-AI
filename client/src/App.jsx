import './App.css'
import Header from './components/customs/Header'
import { DoctorProvider } from './context/DoctorContext'
import { MedicalTestProvider } from './context/MedicalTestContext'
import { Outlet } from 'react-router-dom'
import SideBar from './components/customs/SideBar'

function App() {

  return (
    <>
      <MedicalTestProvider>
        <DoctorProvider>
          <div className='overflow-hidden h-screen bg-white'>
            <Header/>
            <div className='flex bg-[#c4d8e4] h-[90vh]'>
              <SideBar />
              <Outlet/>
            </div>
          </div>
        </DoctorProvider>
      </MedicalTestProvider>
      
    </>
    
  )
}

export default App
