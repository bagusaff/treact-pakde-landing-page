import styled from'styled-components'
export const CardContainer = styled.div`
    width:auto;
    height:auto;
    background-color:#fff;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom:10px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction:column;
    padding:22px;
`

export const Header = styled.div`
    display:flex;
    flex-direction:grid;
    width:100%;
    justify-content:space-between;
`

export const Avatar = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:10px;
`

export const Bio = styled.div`
    display:flex;
    flex-direction:column;
    h4{
        font-weight:500;
        font-size:0.9rem;
        color:#000;
    }
    h5{
        font-weight:600;
        font-size:0.7rem;
        color:#959595;
    }
`
export const TimeStamp = styled.div`
    margin-top:auto;
    margin-bottom:auto;

    h4{
        font-weight: 600;
        font-size:0.6rem;
        color:#959595;
    }
`

export const UserWrapper = styled.div`
    display:flex;
    justify-content:flex-start;
`

export const Content = styled.div`
    padding-top:10px;
    h3{
        font-weight:600;
        font-size:1rem;
    }
    p{
        margin:1rem 0;
        font-weight:400;
        font-size:0.7rem;
    }
`

export const Footer = styled.div`
    padding-top:10px;
    margin-right:10px;
    display:flex;
    flex-direction:grid;
    width:100%;
    justify-content:flex-end;
    grid-gap:20px;
`

export const ForumLink = styled.a`
    font-weight: 500;
    color: #0A93E2;
    text-decoration:none;
    font-size:0.8rem;
    margin-top:auto;
    transition:all 0.1s ease-in-out;
    &:hover{
        transform: scale(1.02);
    }
`

export const CommentLink = styled.a`
    color:#000;
    text-decoration:none;
    white-space:nowrap;
    outline:none;
    font-size:0.8rem;
    font-weight:400;
    text-align:center;
    border:none;
    margin-top:auto;
    cursor: pointer;
    transition:all 0.1s ease-in-out;
    /* &:hover{
        transform: scale(1.1);
    } */
    /* @media screen and (max-width:768px){
        margin-bottom:5px;
        border-radius:20%;
        &:hover{
        transform: scale(1.1);
        }
    } */
`