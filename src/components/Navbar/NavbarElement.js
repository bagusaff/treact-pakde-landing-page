import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    /* background:#963434; */
    background:${({scrollNav}) => (scrollNav ? '#963434' : 'transparent')};
    height:80px;
    margin-top:-80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    font-weight:400;
    top:0;
    z-index:10;
    transition:0.8s all ease;
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:90px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1100px;
`

export const Img = styled.img`
  width: 12%;
`;


export const NavLogo = styled(LinkScroll)`
    /* color:${({scrollNav}) => (scrollNav ? '#fff' : '#183B56')}; */
    color:white;
    justify-self:flex-start;
    cursor: pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor: pointer;
        color:#fff;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;
    
    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(LinkScroll)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    transition:0.1s all ease;
    &:hover{
        color:#FFA833;
        border-bottom: 3px solid #FFA833;
    }
    &.active{
        border-bottom: 3px solid #FFA833;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    a{
        border-radius:50px;
        background:#FFA833;
        color:#fff;
        text-decoration:none;
        white-space:nowrap;
        padding:10px 22px;
        outline:none;
        border:none;
        cursor: pointer;
        transition:all 0.2s ease-in-out;

        &:hover{
            transform: scale(1.1);
            font-weight:600;
        }

    }
    @media screen and (max-width:768px){
        display:none;
    }
`
