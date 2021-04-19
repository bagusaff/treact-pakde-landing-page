import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarBtn,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-50}
              onClick={toggle}
            >
              Profil
            </SidebarLink>
            <SidebarLink
              to="forum"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={toggle}
            >
              Forum
            </SidebarLink>
            <SidebarLink
              to="activity"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={toggle}
            >
              Kegiatan
            </SidebarLink>
            <SidebarLink
              to="gallery"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={toggle}
            >
              Galeri
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarBtn href="/login">Masuk</SidebarBtn>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
