import React from 'react'
import {Container,Row,Col} from 'react-grid-system'
import { ActivityPostContainer, ActivityPostLink, ActivityThumbnail, PostBody, PostContainer, PostDate, PostTitle } from './ActivityPostElement'

import image from '../../../images/Thumbnail.png'
const ActivityPost = () => {
    return (
        <>
        <ActivityPostContainer>
            <Container>
                <Row>
                <Col xl={3} md={3} xs={12} sm={12}>
                    <ActivityThumbnail src={image} />
                </Col>
                <Col xl={9} md={9} xs={12} sm={12}>
                    <Row>
                        <PostContainer>
                            <PostTitle>Seminar Nasional “Bersama Rakyat, Negara Hebat” oleh Dwi Wahyu di Hotel Tentrem, 10 Maret 2021</PostTitle>
                            <PostDate>Dipublikasikan oleh Admin, 11 Maret 2021</PostDate>
                            <PostBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi aenean sed dictum ut mauris sit purus a. Ultricies nulla blandit nunc tortor quis purus vel. Sed vitae morbi cursus non. Pellentesque varius vulputate amet, at tempus est orci.</PostBody>
                            <ActivityPostLink>Baca Selengkapnya</ActivityPostLink>
                        </PostContainer>
                    </Row>
                </Col>
                </Row>
            </Container>
        </ActivityPostContainer>
        </>
    )
}

export default ActivityPost
