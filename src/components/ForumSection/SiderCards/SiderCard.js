import React from 'react'
import { CardContainer, Header, Wrapper, Button, ButtonWrapper } from './SiderCardElement'

import SiderPost from './SiderPost'
const SiderCard = () => {
    return (
        <>
            <CardContainer>
                <Wrapper>
                    <Header>
                        <h3>Proposal Masyarakat</h3>
                    </Header>
                    <SiderPost />
                    <SiderPost />
                    <ButtonWrapper>
                        <Button to="/">
                            Ajukan Proposalmu
                        </Button>
                    </ButtonWrapper>
                </Wrapper>
            </CardContainer>
        </>
    )
}

export default SiderCard
