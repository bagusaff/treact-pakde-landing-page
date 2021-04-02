import React from 'react'
import {FaBars} from 'react-icons/fa'

import { 
    MobileIcon, 
    Nav, 
    NavbarContainer, 
    NavBtn, 
    NavBtnLink, 
    NavItem, 
    NavLinks, 
    NavMenu 
} from './NavbarElement'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
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
