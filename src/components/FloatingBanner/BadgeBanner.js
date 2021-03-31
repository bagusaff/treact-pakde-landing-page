import React from 'react'
import styled from 'styled-components'

import icon1 from '../../images/banner-icon1.svg'
import icon2 from '../../images/banner-icon2.svg'
import icon3 from '../../images/banner-icon3.svg'


const BadgeBanner = () => {
    return (
        <>
            <LabelWrapper>
                <LabelContainer>
                    <InnerWrapper>
                        <ContentWrapper>
                            <Icon src={icon1}/>
                            <Caption>Berintegritas</Caption>
                        </ContentWrapper>
                        <ContentWrapper>
                            <Icon src={icon2}/>
                            <Caption>Profesional</Caption>
                        </ContentWrapper>
                        <ContentWrapper>
                            <Icon src={icon3}/>
                            <Caption>Merakyat</Caption>
                        </ContentWrapper>
                    </InnerWrapper>
                </LabelContainer>
            </LabelWrapper>
        </>
    )
}

export default BadgeBanner

const LabelWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:40px;
`

const LabelContainer = styled.div`
    width: auto;
    height: auto;
    bottom:-50px;
    padding:10px 20px;;
    position:absolute;
    background: #fff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    z-index:1;
`

const InnerWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:600px;
`

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
`

const Icon = styled.img`
    max-width:50px;
    max-height:50px;
    width:100%;
    height:100%;
    margin:auto;
    display:block;
`

const Caption = styled.h1`
    font-weight:500;
    font-size:1rem;  
    text-align:center;
`