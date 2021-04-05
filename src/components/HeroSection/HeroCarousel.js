import React from 'react'
import styled from 'styled-components'
import { Img } from './HeroElement'
import Slider from "react-slick";

import image1 from '../../images/homepict1.png'
import image2 from '../../images/homepict2.png'
import image3 from '../../images/homepict3.png'

const HeroCarousel = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false
    };
    return (
        <>
            <Container>
                <Slider {...settings}>
                <div>
                    <Img src={image1}/>
                </div>
                <div>
                    <Img src={image2}/>
                </div>
                <div>
                    <Img src={image3}/>
                </div>
                </Slider>
            </Container>
        </>
    )
}

export default HeroCarousel

const Container = styled.div`
width:100%;
`