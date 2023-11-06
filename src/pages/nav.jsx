import { Link } from 'gatsby'
import React from 'react'
import styled from'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll';

const NavWrapper = styled.div`
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: repeat(9, auto);
    justify-content: right;
    gap: 10px;
    width: 100%;
    height: auto;
    padding: 10px 0px 10px 0px;
    background-color: black;
    color: white;
    a, .nav-link-btn{
        background-color: black;
        color: white;
        border: solid white 2px;
        align-self: center;
        justify-self: center;
        padding: 10px 14px 10px 14px;
        transition: 2.6s;
        text-decoration-color: black;
    }
    a:hover, .nav-link-btn:hover{
        color: orange;
        border: solid orange 2px;
        transition-duration: 0.8s;
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: white;
    }
    a:not(:hover), .nav-link-btn:not(:hover){
        transition-duration: 0.4s;
    }
    .padding{
        margin-right: 20px;
    }
`

const NavBar = () =>{
    return(
        <NavWrapper>
            <Link to="/">Home</Link>
            <button className='nav-link-btn' onClick={()=> scrollTo('#educacion')}>educación</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#personal')}>personal</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#aprendizaje')}>aprensizaje</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#ropero')}>ropero</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#redes')}>redes</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#mentores')}>mentores</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#inspiracion')}>inspiración</button>
        </NavWrapper>
    )
};
export default NavBar;