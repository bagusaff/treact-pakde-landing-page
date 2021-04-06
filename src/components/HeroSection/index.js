import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
import { BtnWrapper, HeroContainer, Left, NavBtnLink, Right, Wrapper } from './HeroElement'
import bg from '../../images/background-hero.png'
import HeroCarousel from './HeroCarousel';

const HeroSection = () => {
    return (
        <>
        <HeroContainer bg={bg}>
            <Wrapper>
                <Container fluid>
                    <Row>
                        <Col xl={4} md={4} xs={12} sm={12}>
                            <Left>
                                <HeroCarousel />                            
                            </Left>
                        </Col>
                        <Col xl={8} md={8} xs={12} sm={12}>
                            <Right>
                                <h1>“Mengakar kuat, menjulang</h1>
                                <h1>tinggi. <strong>Bersama rakyat</strong></h1>
                                <h1><strong>membangun Negeri”</strong></h1>
                                <br/>                                
                                <h2>RB Dwi Wahyu Budiantoro</h2>
                                <p>Wakil Ketua Komisi B DPRD Provinsi DIY</p>
                                <br/>
                                <BtnWrapper>
                                    <NavBtnLink href="/guest/forum">Forum Aspirasi Rakyat</NavBtnLink>
                                    <NavBtnLink href="/guest/proposal">Ajukan Proposal</NavBtnLink>
                                </BtnWrapper>
                            </Right>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </HeroContainer>
        </>
    )
}

export default HeroSection
