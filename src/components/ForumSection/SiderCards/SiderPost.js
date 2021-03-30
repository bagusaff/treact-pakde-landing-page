import React from 'react'
import { PostWrapper, TextInnerWrapper, TextWrapper, Avatar } from './SiderCardElement'

import avatar from '../../../images/Avatar-2.png'

const SiderPost = () => {
    return (
        <>
            <PostWrapper className="borders">
                <Avatar src={avatar}/>
                <TextWrapper>
                    <TextInnerWrapper>
                        <h4>Lorem Ipsum</h4>
                        <h5>Hari ini</h5>
                    </TextInnerWrapper>
                    <p>Mengajukan Proposal<strong>“Rancangan Anggaran Pembangunan Jembatan”</strong></p>
                </TextWrapper>
            </PostWrapper>
        </>
    )
}

export default SiderPost
