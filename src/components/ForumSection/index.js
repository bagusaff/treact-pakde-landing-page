import React from 'react'
import { ForumContainer,Wrapper,Left,Right } from './ForumElement'
import {Container, Row, Col} from 'react-grid-system'

import bg from '../../images/background-forum.png'
import ForumCardList from './ForumCards/ForumCardList'
import SiderCard from './SiderCards/SiderCard'
import ExperienceBanner from '../FloatingBanner/ExperienceBanner'


const ForumSection = () => {
    return (
        <>
            <ForumContainer bg={bg} id="forum">
                <Wrapper>
                    <Container>
                        <Row>
                            <Col>
                                <Left>
                                    <h1>Forum & Diskusi Masyarakat</h1>
                                </Left>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={8} md={8} xs={12} sm={12}>
                                <Left>
                                    <ForumCardList />
                                </Left>
                            </Col>
                            <Col xl={4} md={4} xs={12} sm={12}>
                                <Right>
                                    <SiderCard />
                                </Right>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
                <ExperienceBanner/>
            </ForumContainer>
        </>
    )
}

export default ForumSection
