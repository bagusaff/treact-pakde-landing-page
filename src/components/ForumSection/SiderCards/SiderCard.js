import React,{useState,useEffect} from 'react'
import { CardContainer, Header, Wrapper, Button, ButtonWrapper } from './SiderCardElement'

import SiderPost from './SiderPost'
const SiderCard = () => {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchURL = "http://104.248.157.32"

    useEffect(()=>{
        setLoading(true)
        fetch(`${fetchURL}/api/proposal`)
        .then((response) => response.json())
        .then((json) => {
            setData(json)
            setLoading(false)
        });        
    },[])

    return (
        <>
            <CardContainer>
                <Wrapper>
                    <Header>
                        <h3>Proposal Masyarakat</h3>
                    </Header>
                    {data.map((item)=>(
                    <SiderPost title={item.title} author={item.created_by} date_post={item.created_at} />
                    ))}
                    <ButtonWrapper>
                        <Button to="/guest/proposal">
                            Ajukan Proposalmu
                        </Button>
                    </ButtonWrapper>
                </Wrapper>
            </CardContainer>
        </>
    )
}

export default SiderCard
