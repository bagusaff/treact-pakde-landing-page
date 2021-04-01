import React,{useState} from 'react'
import AboutSection from '../components/AboutSection'
import ActivitySection from '../components/ActivitySection'
import FloatingButton from '../components/Buttons/FloatingButton'
import FooterSection from '../components/FooterSection'
import ForumSection from '../components/ForumSection'
import GallerySection from '../components/GallerySection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    
    const [isOpen,setIsOpen ] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <ForumSection />
            <ActivitySection />
            <GallerySection />
            <FooterSection />
            <FloatingButton />
        </>
    )
}

export default Home
