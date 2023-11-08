// import { Link } from 'gatsby'
import React from 'react'
import styled from'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll';
import '@fontsource/rubik'

const NavWrapper = styled.div`
    font-family: 'Rubik', 'sans-serif';
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: repeat(9, auto);
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: auto;
    padding: 10px 0px 10px 0px;
    background-color: white;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    color: white;
    z-index: 3;
    a, .nav-link-btn{
        font-family: 'Rubik', 'sans-serif';
        font-size: 16px;
        background-color: transparent   ;
        color: black;
        border: solid black 2px;
        border-radius: 8px;
        align-self: center;
        justify-self: center;
        padding: 10px 14px 10px 14px;
        transition: 1.2s;
        text-decoration: underline 1px solid transparent;
        text-underline-offset: 3px;
    }
    a:hover, .nav-link-btn:hover{
        box-shadow: 1.6px 1.6px 10px 1px rgba(0, 0, 0, 0.44);
        // color: orange;
        // border: solid orange 2px;
        transition-duration: 0.8s;
        cursor: pointer;
        text-decoration-color: black;
    }
    a:not(:hover), .nav-link-btn:not(:hover){
        transition-duration: 0.8s;
    }
    .padding{
        margin-right: 20px;
    }
`

const NavBar = () =>{
    return(
        <NavWrapper>
            <button className='nav-link-btn' onClick={()=> scrollTo('#educacion')}>Educación</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#personal')}>Personal</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#aprendizaje')}>Aprensizaje</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#ropero')}>Ropero</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#redes')}>Redes</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#mentores')}>Mentores</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#inspiracion')}>Inspiración</button>
        </NavWrapper>
    )
};
export default NavBar;