import React from 'react'
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavMenu } from './NavbarElement'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <MobileIcon>
                    <FaBars fill='#fff'/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/activity">Activity</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/forum">Forum</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/register">Masuk</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
