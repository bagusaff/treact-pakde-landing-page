import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
import { FooterContainer, FooterWrap,FooterLink,WebsiteRights } from './FooterElement'

const FooterSection = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <Container>
                        <Row>
                            <Col xl={2} md={2} xs={6} sm={2}>
                            <FooterLink to="/">Link</FooterLink>
                            </Col>
                            <Col xl={2} md={2} xs={6} sm={2}>
                            <FooterLink to="/">Link</FooterLink>
                            </Col>
                            <Col xl={2} md={2} xs={6} sm={2}>
                            <FooterLink to="/">Link</FooterLink>
                            </Col>
                            <Col xl={2} md={2} xs={6} sm={2}>
                            <FooterLink to="/">Link</FooterLink>
                            </Col>
                            <Col xl={2} md={2} xs={6} sm={2}>
                            <FooterLink to="/">Link</FooterLink>
                            </Col>
                            <Col xl={2} md={2} xs={6} sm={2}>
                            <FooterLink to="/">Link</FooterLink>
                            </Col>
                        </Row>
                    </Container>
                    <WebsiteRights>Copyright © 2021. All Rights Reserved.</WebsiteRights>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default FooterSection
