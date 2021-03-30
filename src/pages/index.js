import React,{useState} from 'react'
import AboutSection from '../components/AboutSection'
import FooterSection from '../components/FooterSection'
import ForumSection from '../components/ForumSection'
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
            <FooterSection />
        </>
    )
}

export default Home
