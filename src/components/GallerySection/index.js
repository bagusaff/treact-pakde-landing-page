import React from 'react'
import { GalleryContainer, Wrapper,InnerWrapper,Header, GalleryTitle,GalleryLink, GalleryImage, ImageWrapper, ImageCaption } from './GalleryElement'
import {Container,Row,Col,Hidden} from 'react-grid-system'

import image from '../../images/Thumbnail.png'
import AskBanner from '../FloatingBanner/AskBanner'

const GallerySection = () => {
    return (
        <>
            <GalleryContainer id="gallery">
                <Wrapper>
                    <Container>
                        <Row>
                            <Col>
                                <InnerWrapper>
                                    <Header>
                                        <GalleryTitle to="/">Galeri Pakdhe</GalleryTitle>
                                        <Hidden sm xs><GalleryLink to="/">Lihat semua galeri</GalleryLink></Hidden>
                                    </Header>
                                </InnerWrapper>
                            </Col>
                        </Row>
                        <Row>                            
                            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                <ImageWrapper>
                                    <GalleryImage src={image}/>
                                    <ImageCaption>
                                        <h1>Gotong Royong</h1>
                                        <p>Gotong royong membangun jembatan desa kalideres , pada hari jumat tanggal 31 Maret 2021</p>
                                    </ImageCaption>
                                </ImageWrapper>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                <ImageWrapper>
                                    <GalleryImage src={image}/>
                                    <ImageCaption>
                                        <h1>Sosialisasi Masyarakat</h1>
                                        <p>Sosialisasi mengenai pentingnya menerapkan 3M dalam kehidupan sehari-hari</p>
                                    </ImageCaption>
                                </ImageWrapper>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                <ImageWrapper>
                                    <GalleryImage src={image}/>
                                    <ImageCaption>
                                        <h1>Rapat bulanan</h1>
                                        <p>Membahas perkembangan kegiatan yang berhubungan dengan masyarakat jogja</p>
                                    </ImageCaption>
                                </ImageWrapper>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
                <AskBanner /> 
            </GalleryContainer>
        </>
    )
}

export default GallerySection
