import React from 'react'
import {Container,Row,Col} from 'react-grid-system'
import { ActivityPostContainer, ActivityPostLink, ActivityThumbnail, PostBody, PostContainer, PostDate, PostTitle } from './ActivityPostElement'

const ActivityPost = ({thumbnail,title,date_post,description,url}) => {
    return (
        <>
        <ActivityPostContainer>
            <Container>
                <Row>
                <Col xl={3} md={3} xs={12} sm={12}>
                    <ActivityThumbnail src={thumbnail} />
                </Col>
                <Col xl={9} md={9} xs={12} sm={12}>
                    <Row>
                        <PostContainer>
                            <PostTitle href={url}>{title}</PostTitle>
                            <PostDate>Dipublikasikan oleh Admin, {date_post}</PostDate>
                            <PostBody>{description}</PostBody>
                            <ActivityPostLink href={url}>Baca Selengkapnya</ActivityPostLink>
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
