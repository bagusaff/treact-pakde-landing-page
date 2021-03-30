import React from 'react'
import { Avatar, Bio, CardContainer, Header, TimeStamp, UserWrapper, Wrapper,Content,Footer, ForumLink, CommentLink, UserLink } from './ForumCardElement'
import {Hidden} from 'react-grid-system'
import {FaRegCommentDots} from 'react-icons/fa'

import avatar from '../../../images/Avatar.png'
const ForumCard = () => {
    return (
        <>
            <CardContainer>
                <Wrapper>
                    <Header>
                        <UserLink to ="/user-profile">
                        <UserWrapper>
                            <Avatar src={avatar}/>
                            <Bio>
                                <h4>Andra the backbone</h4>
                                <h5>Wiraswasta</h5>
                            </Bio>
                        </UserWrapper>
                        </UserLink>
                        <TimeStamp>
                            <h4>10 Maret 2021, 10:40</h4>
                        </TimeStamp>
                    </Header>
                    <Content>
                        <h3>Bagaimana bantuan pemerintah daerah kepada umkm yang terkena dampak covid-19?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra congue neque vestibulum purus nisl nunc euismod mauris et. Cursus consectetur eget phasellus enim sit ultrices nisi. Vestibulum ac, nunc, et hendrerit congue suspendisse. Integer nunc tortor elit elementum nulla.</p>
                    </Content>
                    <Footer>
                        <CommentLink to="/detail-discussion">
                            <FaRegCommentDots/><span> 10 <Hidden xs sm>Komentar</Hidden></span>
                        </CommentLink>
                        <ForumLink to="/detail-discussion">Lihat Detail Diskusi</ForumLink>
                    </Footer>
                </Wrapper>
            </CardContainer>
        </>
    )
}

export default ForumCard
