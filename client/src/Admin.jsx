import React from 'react'
import { MedicalTestProvider } from './context/MedicalTestContext'
import { DoctorProvider } from './context/DoctorContext'
import Header from './components/customs/Header'
import AdminSideBar from './components/customs/AdminSideBar'
import { Outlet } from 'react-router-dom'

function Admin() {
return (
    <MedicalTestProvider>
        <DoctorProvider>
        <div className='overflow-hidden h-screen bg-white'>
            <Header/>
            <div className='flex bg-[#E9F7FF] h-[90vh]'>
                <AdminSideBar/>
                <Outlet />
            </div>
        </div>
        </DoctorProvider>
    </MedicalTestProvider>
)
}

export default Admin