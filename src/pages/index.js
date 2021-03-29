import React from 'react'
import AboutSection from '../components/AboutSection'
import FooterSection from '../components/FooterSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <>
         <Navbar />
         <HeroSection />
         <AboutSection />
         <FooterSection />
        </>
    )
}

export default Home
