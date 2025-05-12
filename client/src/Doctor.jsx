import React from 'react'
import Header from './components/customs/Header'
import { Outlet } from 'react-router-dom'

function Doctor() {
  return (
    <div className='overflow-hidden h-screen bg-white'>
        <Header/>
        <div className='flex bg-[#E9F7FF] h-[90vh]'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Doctor