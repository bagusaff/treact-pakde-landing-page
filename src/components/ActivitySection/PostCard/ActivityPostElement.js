import styled from 'styled-components'

export const ActivityPostContainer = styled.div`
    max-width:1140px;
    width:100%;
    padding:10px 0;
    margin-top:1rem;
`

export const ActivityThumbnail = styled.img`
    border-radius: 10px;
    max-width:270px;
    width:100%;

    
    @media screen and (max-width:768px){
        margin:auto;
        display:block;
    }
`

export const PostContainer = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    margin-left:10px;
`

export const PostTitle = styled.a`
    font-weight: 500;
    font-size: 1.4rem;
    color: #000000;
    margin:10px 0;
    text-decoration:none;
`

export const PostDate = styled.h3`
    font-weight: 600;
    font-size: 0.7rem;
    color: #A2A2A2;
    margin-bottom:5px;
`

export const PostBody = styled.p`
    font-weight: 500;
    color:#000;
    font-size:0.8rem;
    margin-bottom:5px;
`

export const ActivityPostLink = styled.a`
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 22px;
    align-self:flex-end;
    text-decoration:none;
    /* identical to box height */
    color: #0A93E2;
    transition:all 0.1s ease-in-out;
    &:hover{
        transform: scale(1.02);
    }
`