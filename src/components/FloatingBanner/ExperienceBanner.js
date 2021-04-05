import React from 'react'
import styled from 'styled-components'
const ExperienceBanner = () => {
    return (
        <>
            <LabelWrapper>
                <Label>
                    <InnerWrapper>
                        <ContentWrapper>
                            <Title>Legislator</Title>
                            <Body>Sebagai Wakil Ketua Komisi B DPRD Provinsi DIY yang mengatur bidang Perekonomian dan Keuangan</Body>
                        </ContentWrapper>
                        <ContentWrapper>
                            <Title>Politikus</Title>
                            <Body>Sebagai kader PDIP dan berkiprah nyata di kepengurusan partai sebagai Bendahara DPD PDIP DI Yogyakarta</Body>
                        </ContentWrapper>
                        <ContentWrapper>
                            <Title>Aspirator</Title>
                            <Body>Memperoleh 10.104 suara dukungan untuk Pakdhe pada pemilihan legislatif 2019, bukti nyata dekat dan peduli dengan rakyat</Body>
                        </ContentWrapper>
                    </InnerWrapper>
                </Label>
            </LabelWrapper>
        </>
    )
}

export default ExperienceBanner

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
    padding:10px 20px;
    position:absolute;
    background: #fff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    z-index:1;
    @media screen and (max-width:500px){
        padding:5px 10px;
    }
`

const InnerWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-content:center;
    width:100%;
    max-width:800px;
    `

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    width:100%;
    padding:10px;
`

const Title = styled.h1`
    font-weight: 500;
    font-size:1rem;
    text-align:center;
    margin-bottom:10px;
    @media screen and (max-width:384px){
        font-size:0.8rem;
    }
`

const Body = styled.p`
    font-weight:400;
    font-size:0.7rem;
    text-align:center;

    @media screen and (max-width:768px){
        font-size:0.6rem;
    }
    @media screen and (max-width:384px){
        font-size:0.5rem;
    }
`