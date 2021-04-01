import React,{useState,useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll'
import styled from 'styled-components'
import {FaArrowUp} from 'react-icons/fa'

const FloatingButton = () => {

    const [scrollNav, setScrollNav] = useState(false)

    const scrolled =()=>{
        if(window.scrollY >= 250){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',scrolled);
        return ()=>{
            setScrollNav(false);
        }
    }, [])

    const toggleHome=()=>{
        scroll.scrollToTop();
    }

    return (
        <>
            <ScrollButton scrollNav={scrollNav} onClick={toggleHome}><FaArrowUp/></ScrollButton>
        </>
    )
}

export default FloatingButton

const ScrollButton = styled.button`
    display: ${({scrollNav}) => (scrollNav ? 'block' : 'none')};;
    position: fixed;
    width:50px;
    height:50px;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #963434;
    color: #fff;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
    transition:0.5s ease-in-out;
    &:hover{
        background-color: #fff;
        color:#963434;
    }
`