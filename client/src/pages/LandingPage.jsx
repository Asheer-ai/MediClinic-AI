import HeroSection from '@/components/customs/sections/HeroSection'
import React from 'react'

function LandingPage() {
    return (
    <>
    <div  className='w-full min-h-screen px-20 ' style={{
        background: `linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)`
    }}>
        <HeroSection/>
    </div>

    </>
    )
}

export default LandingPage