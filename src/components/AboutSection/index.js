import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
import { AboutContainer, Left, Wrapper,BtnWrapper,NavBtnLink, Right, Img } from './AboutElement'
import SocialButton from './SocialButton'

import bg from '../../images/background-about.png'
import img from '../../images/homepict2.png'

const AboutSection = () => {
    return (
        <>
            <AboutContainer bg={bg}>
                <Wrapper>
                    <Container>
                        <Row>
                            <Col xl={7} md={7} xs={12} sm={12}>
                                <Left>
                                    <h1>Mengenal Pakdhe</h1>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem neque, lacus magna lacus id nec, ullamcorper pellentesque malesuada. Semper non consequat dui a est. Proin dictum scelerisque accumsan, eu, elementum sed ornare. At et cursus pretium aliquet.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem neque, lacus magna lacus id nec, ullamcorper pellentesque malesuada. </p>
                                    <BtnWrapper>
                                        <NavBtnLink to ="/forum">Sampaikan Aspirasimu ke Pakdhe</NavBtnLink>
                                    </BtnWrapper>
                                    <h2>Yuk intip aktifitas pak Dwi Wayu</h2>
                                    <br/>
                                    <SocialButton/>
                                </Left>
                            </Col>
                            <Col xl={5} md={5} xs={12} sm={12}>
                                <Right>
                                    <Img src={img} alt="Pakdhes" />
                                    <h2>RB Dwi Wahyu Budiantoro</h2>
                                    <h3>Wakil Ketua Komisi B DPRD Provinsi DIY</h3>
                                    <h3>Fraksi Partai Demokrasi Indonesia Perjuangan</h3>
                                </Right>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection