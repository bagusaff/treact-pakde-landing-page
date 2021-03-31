import React from 'react'
import AskBanner from '../FloatingBanner/AskBanner'
import { ActivityContainer, ActivityLink, ActivityTitle, Header, InnerWrapper, Wrapper } from './ActivityElement'
import ActivityPost from './PostCard/ActivityPost'

const ActivitySection = () => {
    return (
        <>
            <ActivityContainer>
                <Wrapper>
                    <InnerWrapper>
                        <Header>
                            <ActivityTitle>Kegiatan Pakdhe</ActivityTitle>
                            <ActivityLink>Lihat Semua Kegiatan</ActivityLink>
                        </Header>
                        <ActivityPost />
                        <ActivityPost />
                    </InnerWrapper>
                </Wrapper>
                {/* <AskBanner /> */}
            </ActivityContainer>
        </>
    )
}

export default ActivitySection
