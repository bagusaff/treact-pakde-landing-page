import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    /* padding-top:-117px; */
    background-color: #963434;
    position:absolute;
    width:100%;
`

export const FooterWrap = styled.div`
    padding-top:48px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1140px;
    margin:0 auto;
`


export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration:none;
    margin-bottom:1rem;
    font-size:14px;
    justify-content:center;
    font-weight:400;
    &:hover{
        color:#FFA833;
        transition:0.3s ease-out
    }
`
export const WebsiteRights = styled.small`
    color:#fff;
    margin-bottom:15px;
    margin-top:20px;
    font-weight:600;
    font-size:0.7rem;
    @media screen and (max-width:820px){
        margin-bottom:16px;
    }
    
`
