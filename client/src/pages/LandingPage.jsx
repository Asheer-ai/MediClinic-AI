import DoctorsSection from '@/components/customs/sections/DoctorsSection'
import FaqSection from '@/components/customs/sections/FaqSection'
import FooterSection from '@/components/customs/sections/FooterSection'
import HeroSection from '@/components/customs/sections/HeroSection'
import ServiceSection from '@/components/customs/sections/ServiceSection'
import React from 'react'

function LandingPage() {
    return (
    <>
    <div  className='w-full min-h-screen px-20 ' style={{
        background: `linear-gradient(90deg, #b2e6c2 0%, #a9c3f5 100%)`
    }}>
        <HeroSection/>
        <ServiceSection/>
        <DoctorsSection/>
        <FaqSection/>
    </div>
        <FooterSection/>
    </>
    )
}

export default LandingPage