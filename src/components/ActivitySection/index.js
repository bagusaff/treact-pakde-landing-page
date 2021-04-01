import React from 'react'
import { ActivityContainer, ActivityLink, ActivityTitle, Header, InnerWrapper, Wrapper } from './ActivityElement'
import ActivityPost from './PostCard/ActivityPost'

const ActivitySection = () => {
    return (
        <>
            <ActivityContainer id="activity">
                <Wrapper>
                    <InnerWrapper>
                        <Header>
                            <ActivityTitle to="/">Kegiatan Pakdhe</ActivityTitle>
                            <ActivityLink to="/">Lihat Semua Kegiatan</ActivityLink>
                        </Header>
                        <ActivityPost />
                        <ActivityPost />
                    </InnerWrapper>
                </Wrapper>
            </ActivityContainer>
        </>
    )
}

export default ActivitySection
