import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink, SideBtnWrap, SidebarBtn } from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
               <Icon>
                    <CloseIcon/>
               </Icon>
               <SidebarWrapper>
                   <SidebarMenu>
                       <SidebarLink to="/activity" onClick={toggle}>Kegiatan</SidebarLink>
                       <SidebarLink to="/forum" onClick={toggle}>Forum</SidebarLink>
                       <SidebarLink to="/article" onClick={toggle}>Artikel</SidebarLink>
                       <SidebarLink to="/gallery" onClick={toggle}>Galeri</SidebarLink>
                       <SidebarLink to="/profile" onClick={toggle}>Profile</SidebarLink>
                   </SidebarMenu>
                   <SideBtnWrap>
                       <SidebarBtn to="/register">Masuk</SidebarBtn>
                   </SideBtnWrap>
               </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
