import React from 'react'
import styled from 'styled-components'
const AskBanner = () => {
    return (
        <>
            <LabelWrapper>
                <Label>
                    <h3>Punya pertanyaan yang ingin disampaikan kepada Pak Dwek?</h3>
                    <h3>Dengan senang hati bisa menerimanya</h3>
                    <ButtonWrapper>
                        <Button href="/contact">Tanyakan pada Pak Dwek</Button>
                    </ButtonWrapper>
                </Label>
            </LabelWrapper>
        </>
    )
}

export default AskBanner


const LabelWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:40px;
`

const Label = styled.div`
    width: auto;
    height: auto;
    bottom:-50px;
    padding:10px 20px;;
    position:absolute;
    background: #fff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    z-index:1;
    h3{
        font-style: normal;
        font-weight: 500;
        font-size: 0.8rem;
        text-align: center;
    }    
`

const ButtonWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-top:10px;
`

const Button = styled.a`
    border-radius:10px;
    background:#FFA833;
    color:#fff;
    font-weight:600;
    text-decoration:none;
    white-space:nowrap;
    padding:8px 18px;
    outline:none;
    font-size:0.6rem;
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
`