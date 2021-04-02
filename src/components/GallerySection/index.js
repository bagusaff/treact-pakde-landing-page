import React,{useEffect,useState} from 'react'
import { GalleryContainer, Wrapper,InnerWrapper,Header, GalleryTitle,GalleryLink, GalleryImage, ImageWrapper, ImageCaption } from './GalleryElement'
import {Container,Row,Col,Hidden} from 'react-grid-system'

import AskBanner from '../FloatingBanner/AskBanner'

const GallerySection = () => {
    
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)
    const fetchURL = "http://104.248.157.32"

    useEffect(()=>{
        // setLoading(true)
        fetch(`${fetchURL}/api/gallery`)
        .then((response) => response.json())
        .then((json) => {
            setData(json)
            // setLoading(false)
        });        
    },[])

    return (
        <>
            <GalleryContainer id="gallery">
                <Wrapper>
                    <Container>
                        <Row>
                            <Col>
                                <InnerWrapper>
                                    <Header>
                                        <GalleryTitle href="/gallery">Galeri Pakdhe</GalleryTitle>
                                        <Hidden sm xs><GalleryLink href="/gallery">Lihat semua galeri</GalleryLink></Hidden>
                                    </Header>
                                </InnerWrapper>
                            </Col>
                        </Row>
                        <Row>
                            {data.map((item,index)=>(
                                <Col xl={4} lg={4} md={4} sm={12} xs={12} key={index}>
                                    <ImageWrapper>
                                        <GalleryImage src={item.path}/>
                                        <ImageCaption>
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                        </ImageCaption>
                                    </ImageWrapper>
                                </Col>
                            ))}                         
                        </Row>
                    </Container>
                </Wrapper>
                <AskBanner /> 
            </GalleryContainer>
        </>
    )
}

export default GallerySection
