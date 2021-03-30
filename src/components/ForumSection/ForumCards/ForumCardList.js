import React from 'react'
import styled from 'styled-components'
import ForumCard from './ForumCard'

const ForumCardList = () => {
    return (
        <>
            <ForumCardListContainer>
                <ForumCard />
                <ForumCard />
            </ForumCardListContainer>   
        </>
    )
}

export default ForumCardList


const ForumCardListContainer = styled.div`
    height:100%;
    display: flex;
    align-items: flex-start;
    flex-direction:column;
    justify-content: center; 
`