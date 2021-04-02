import styled from 'styled-components'
export const GalleryContainer = styled.div`
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

export const GalleryTitle = styled.a`
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
        margin-bottom:50px;
    }
    transition:all 0.1s ease-in-out;
    &:hover{
        transform: scale(1.02);
    }
`


export const GalleryLink = styled.a`
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

export const ImageWrapper = styled.div`
    max-width:310px;
    width:100%;
    position:relative;
    margin-bottom:20px;
    display:flex;
    transition:all 0.1s ease-in-out;
    cursor: pointer;
    @media screen and (max-width:768px){
        margin:auto;
        margin-bottom:20px;
    }
    &:hover{
        transform: scale(1.1);
    }
    `

export const GalleryImage = styled.img`
    width:100%;
    max-height:221px;
    height:100%;
    display:block;
    border-radius: 10px;
`

export const ImageCaption = styled.div`
        width:100%;
        height:100%;
        background:rgba(0, 0, 0, 0.3);
        position:absolute; 
        opacity:0; 
        border-radius:10px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        transition:all 300ms ease-in-out;
        -webkit-transition:all 300ms ease-in-out;
        -moz-transition:all 300ms ease-in-out;
        -o-transition:all 300ms ease-in-out;
        -ms-transition:all 300ms ease-in-out;
        h1{
            text-align:center;
            text-transform:uppercase;
            font-size:1rem;
            color:#FFA833;
        }
        p{
            text-align:center; 
            color:#fff;
        }
        &:hover{
            opacity:1;
        }
`
