import React, {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'

import { 
    MobileIcon, 
    NavLogo,
    Nav, 
    NavbarContainer, 
    NavBtn, 
    NavItem, 
    NavLinks, 
    NavMenu ,
    Img
} from './NavbarElement'

import navbarlogo from '../../images/output-onlinepngtools.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const scrolled =()=>{
        if(window.scrollY >= 500){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',scrolled)
    }, [])
    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            <NavLogo to="/" onClick={toggle}><Img src={navbarlogo} style={{fill:'red'}}></Img></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars fill='#fff'/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Profil</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="forum" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Forum</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="activity" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Kegiatan</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="gallery" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Galeri</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <a href="/login">Login</a>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
