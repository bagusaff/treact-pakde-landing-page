import React from 'react'
import { Row, Col} from 'react-grid-system'
import { FooterContainer, FooterWrap,FooterLink,WebsiteRights } from './FooterElement'

const FooterSection = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                        <Row>
                            <Col xl={3} md={3} xs={6} sm={6}>
                            <FooterLink to="profile" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Profil</FooterLink>
                            </Col>
                            <Col xl={3} md={3} xs={6} sm={6}>
                            <FooterLink to="forum" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Forum</FooterLink>
                            </Col>
                            <Col xl={3} md={3} xs={6} sm={6}>
                            <FooterLink to="activity" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Kegiatan</FooterLink>
                            </Col>
                            <Col xl={3} md={3} xs={6} sm={6}>
                            <FooterLink to="gallery" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Galeri</FooterLink>
                            </Col>
                        </Row>
                    <WebsiteRights>Copyright © 2021. All Rights Reserved.</WebsiteRights>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default FooterSection
