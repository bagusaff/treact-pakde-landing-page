import React from 'react'
import {Hidden} from 'react-grid-system'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'
import { BtnWrapper, SocialBtnLink } from './AboutElement'

const SocialButton = () => {
    return (
        <>
            <BtnWrapper>
                <SocialBtnLink href="https://www.youtube.com" background="#CD201F">
                    <FaYoutube fill='#fff' /><Hidden xs sm><span> Youtube</span></Hidden>
                </SocialBtnLink>
                <SocialBtnLink href="https://www.instagram.com" background="#EE136C">
                    <FaInstagram fill='#fff' /><Hidden xs sm><span> Instagram</span></Hidden>
                </SocialBtnLink>
                <SocialBtnLink href="https://www.facebook.com" background="#485992">
                    <FaFacebook fill='#fff' /><Hidden xs sm><span> Facebook</span></Hidden>
                </SocialBtnLink>
                <SocialBtnLink href="https://www.twitter.com" background="#0A93E2">
                    <FaTwitter fill='#fff' /><Hidden xs sm><span> Twitter</span></Hidden>
                </SocialBtnLink>
            </BtnWrapper>
        </>
    )
}

export default SocialButton
