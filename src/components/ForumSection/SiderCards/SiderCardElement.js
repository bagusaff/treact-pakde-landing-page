import styled from 'styled-components'

export const CardContainer = styled.div`
    width:auto;
    height:auto;
    background-color:#fff;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    @media screen and (max-width:768px){
        width:100%;
    }
`

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px 22px;
    
`

export const Header = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    margin-bottom:15px;
    h3{
        font-weight:600;
        font-size:1rem;
        margin-bottom:10px;
        color:#305474;
        border-bottom: 1px solid #FFA833;
        transform: rotate(0.16deg);
    }
`

export const PostWrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:grid;
    justify-content:flex-start;
    padding:10px 0px;
    &.borders{
        border-bottom: 1.5px dashed #E0E0E0;
    }
`

export const Avatar = styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
`

export const TextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:10px;
    h4{
        font-weight:600;
        font-size:0.8rem;
        color:#000;
    }
    h5{
        font-weight:400;
        color:#000;
        font-size:0.8rem;
    }
    p{
        font-weight:400;
        font-size:0.7rem;
        color:#959595;
        margin-top:0.5rem;
    }
    strong{
        font-weight:600;
    }
`

export const TextInnerWrapper = styled.div`
    display:flex;
    flex-direction:grid;
    justify-content:space-between;
`

export const ButtonWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;

    a{
        border-radius:10px;
        background:#FFA833;
        color:#fff;
        font-weight:600;
        text-decoration:none;
        white-space:nowrap;
        padding:7px 0px;
        margin:10px 0;
        outline:none;
        font-size:0.8rem;
        width:80%;
        text-align:center;
        border:none;
        cursor: pointer;
        transition:all 0.1s ease-in-out;
        &:hover{
            transform: scale(1.02);
        }
        @media screen and (max-width:768px){
            margin-bottom:20px;
        }
    }
`