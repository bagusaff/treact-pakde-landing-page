import styled from 'styled-components'
export const ActivityContainer = styled.div`
    width:100%;
    background-color:#fff;
    position:relative;
`

export const Wrapper = styled.div`
    max-width:1140px;
    margin:auto;
    padding:5rem 1rem;
`

export const InnerWrapper = styled.div`
    display:flex;
    align-items:flex-start;
    flex-direction:column;
`

export const Header = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
    align-items:center;
`

export const ActivityTitle = styled.a`
    font-weight:600;
    font-size:2.2rem;
    margin-bottom:30px;
    color:#305474;
    text-decoration:none;
    border-bottom: 2px solid #FFA833;
    transform: rotate(0.16deg);
    
    transition:all 0.1s ease-in-out;
    @media screen and (max-width:768px){
        font-size:1.5rem;
        margin:auto;
    }
    transition:all 0.1s ease-in-out;
    &:hover{
        transform: scale(1.02);
    }
`

export const ActivityLink = styled.a`
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    text-decoration:none;
    color: #0A93E2;
    transition:all 0.1s ease-in-out;
    &:hover{
        transform: scale(1.02);
    }
    @media screen and (max-width:768px){
        display:none;
    }
`