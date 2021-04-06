import styled from 'styled-components'
export const HeroContainer = styled.div`
    width:100%;
    background-image:url(${({bg})=> bg});
    background-repeat: no-repeat;
    background-size: 100% 650px;
    top:0;
    background-position: center;
    @media screen and (max-width:768px){
        background-size: cover;
    }
`

export const Wrapper = styled.div`
    max-width:1140px;
    margin:auto;
    padding:1rem;
    padding-top:10rem;
    padding-bottom:5rem;
`

export const Left = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction:column;
    justify-content: center;
`

export const Right = styled.div`
    height:100%;
    display: flex;
    align-items: flex-end;
    flex-direction:column;
    justify-content: center; /* center items vertically, in this case */
    h1{
        font-weight:500;
        font-size:2.5rem;
        margin-bottom:10px;
        color:#fff;
    }
    strong{
        font-weight:600;
        font-size:2.7rem;
    }
    h2{
        font-weight:600;
        font-size:1rem;
        color:#fff;
    }
    p{
        font-weight:400;
        font-size:1rem;
        color:#fff;
    }
    @media screen and (max-width:768px){
        align-items: center;
        padding-top:20px;
        h1,strong,h2{
            font-size:1.3rem;
            margin-bottom:0;
        }
        p{
            padding-top:5px;
            font-size:0.7rem;
        }
    }
`

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  max-height:500px;
  @media screen and (max-width:767px){
    max-width:70%;
    margin-left:auto;
    margin-right:auto;
    display:block;
    }
`

export const BtnWrapper = styled.div`
    padding-top:20px;
    display:flex;
    align-items:center;
    @media screen and (max-width:768px){
        flex-direction:column;
    }
`

export const NavBtnLink = styled.a`
    border-radius:50px;
    background:#FFA833;
    color:#fff;
    text-decoration:none;
    white-space:nowrap;
    padding:10px 22px;
    margin-left:20px;
    outline:none;
    width:100%;
    text-align:center;
    border:none;
    cursor: pointer;
    transition:all 0.1s ease-in-out;
    &:hover{
        transform: scale(1.1);
        font-weight:600;
    }
    @media screen and (max-width:768px){
        margin-bottom:20px;
    }
`