import styled from 'styled-components'

export const ForumContainer = styled.div`
    width:100%;
    background-image:url(${({bg})=> bg});
    background-repeat: no-repeat;
    background-size: 100% 800px;
    background-position: center;
    position:relative;
    @media screen and (max-width:768px){
        background-size: cover;
    }
` 

export const Wrapper = styled.div`
    max-width:1140px;
    margin:auto;
    padding:5rem 1rem;
`

export const Left = styled.div`
    height:100%;
    display: flex;
    align-items: flex-start;
    flex-direction:column;
    justify-content: center; /* center items vertically, in this case */
    h1{
        font-weight:600;
        font-size:2.2rem;
        margin-bottom:30px;
        color:#305474;
        border-bottom: 2px solid #FFA833;
        transform: rotate(0.16deg);
    }
    @media screen and (max-width:768px){
        align-items: center;
        padding-top:20px;
        h1,strong{
            font-size:1.2rem;
        }
        h2{
            font-size:1rem;
        }
        p{
            padding-top:5px;
            font-size:0.7rem;
        }
    }
`

export const Right= styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    h2{        
        margin-top:10px;
        font-weight:600;
        font-size:1.2rem;
        color:#000;
    }
    h3{
        color:#A1A1A1;
        font-weight:600;
        font-size:0.8rem;
    }

    @media screen and (max-width:768px){
        h2{
            font-size:1rem;
        }
        h3{
            font-size:0.6rem;
        }
    }
`