// import { Link } from 'gatsby'
import React from 'react';
import styled from'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '@fontsource/rubik';

const SideHandler = () =>{
    const target = document.querySelector('#side-selector');
    target.classList.toggle('side-nav-on');
} 

const SideLinkHandler = (target) => {
    SideHandler();
    scrollTo(target);
  };

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
    transition: 0.8s;

    @media(max-width: 820px){
        grid-tmplate-columns: auto;
        justify-content: right;

        .nav-link-btn{
            display: none;
        }

        .side-nav-btn{
            display: block;
            cursor: pointer;
            border: none;
            background-color: transparent;
        }
        .side-icon-container{
            display: grid;
            width: 50px;
            grid-template-rows: repeat(3, auto);
            gap: 6px;
            background-color: transparent;
        }
        .oval{
            background-color: transparent;
            border: solid black 3px;
            // border-radius: 5px;
            border-top-left-radius: 24% 100%;
            border-top-right-radius: 24% 100%;
            border-bottom-left-radius: 24% 100%;
            border-bottom-right-radius: 24% 100%;
            width: 50px;
            height: 10px;
        }
    }
    @media(min-width: 821px){
        .side-nav-btn{
            display: none;
        }
    }
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
        transition: 0.4s;
        text-decoration: underline 1px solid transparent;
        text-underline-offset: 3px;
    }
    a:hover, .nav-link-btn:hover{
        box-shadow: 1.6px 1.6px 10px 1px rgba(0, 0, 0, 0.38);
        // color: orange;
        // border: solid orange 2px;
        transition-duration: 0.8s;
        cursor: pointer;
        text-decoration-color: black;
    }
    a:not(:hover), .nav-link-btn:not(:hover){
        transition-duration: 0.8s;
    }
    // .padding{
    //     margin-right: 20px;
    // }
`

export const NavBar = () =>{
    return(
        <NavWrapper>
            <button className='nav-link-btn' onClick={()=> scrollTo('#educacion')}>Educación</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#personal')}>Personal</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#aprendizaje')}>Aprensizaje</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#ropero')}>Ropero</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#redes')}>Redes</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#mentores')}>Mentores</button>
            <button className='nav-link-btn' onClick={()=> scrollTo('#inspiracion')}>Inspiración</button>
            <button className='side-nav-btn' onClick={()=> SideHandler()}>
                <div className='side-icon-container'>
                    <div className='oval oval1'></div>
                    <div className='oval oval2'></div>
                    <div className='oval oval3'></div>
                </div>
            </button>
        </NavWrapper>
    )
};

const SideWrapper = styled.div`
    
    background-color: black;
    position: fixed;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: right;
    right: -100%;
    z-index: 9999;
    height: calc(100vh - 62px);
    width: calc(60dvw + 46px);
    transition: all 0.6s ease-in-out;
    border-top-left-radius: 10px 20px;
    border-bottom-left-radius: 20% 10%;



    .side-nav-close{
        background-color: transparent;
        border: none;
        margin-top: 8px;
        align-self: top;
        justify-self: center;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        cursor: pointer;
        position: relative;
    }
    .side-nav-close::before,
    .side-nav-close::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3.6px;
        background-color: white;
        border-radius: 8px;
    }

    .side-nav-close::before {
        transform: rotate(45deg);
    }

    .side-nav-close::after {
        transform: rotate(-45deg);
    }

    .style-wrapper{
        background-color: white;
        width: 60dvw;
        height: calc(100vh - 62px);
        display: grid;
        grid-template-rows:  repeat(7, auto) 1fr;
        gap: 0px;
        right: -100;
        border-top-left-radius: 10px 30px;
        border-bottom-left-radius: 40% 10%;

        .nav-link-btn{
            border: none;
            background-color: transparent;
            width: 100%;
            height: fit-content;
            padding: 12px 0 12px 0;
            font-size: 22px;
            
            transition: 0.4s;
            z-index: 4;
            position: relative;
            cursor: pointer;
            text-align: left;
        }
        .nav-link-btn:hover{
            color: white;
        }
        .nav-link-btn:hover .btn-bg{width: 100%}
        .nav-link-btn::before{
            transition: opacity 0.4s ease, transform 0.4s ease;
            content: "- ";
            right: 10px;
            opacity: 0;
            transform: translateX(-100%); 
            margin-left: 8px;  
        }
        .nav-link-btn:hover::before{
            opacity: 1;
            transform: translateX(0);
        }
        .btn-bg{
            position: absolute;
            left: 0px;
            top: 0px;
            height: 100%;
            background-color: rgba(0, 0, 0, 1);
            width: 0px;
            z-index: -2;
            transition: 0.4s;
            border-top-right-radius: 4% 4%;
            border-bottom-right-radius: 4% 100%;
        }
        
    }

    @media(max-width: 820px){
        &.side-nav-on{
            right: 0;
        }
        .style-wrapper{
            right: 0;
        }
    }
    @media(min-width: 821px){
        right: -100;
    }
`

export const SideNav = () =>{
    return(
        <SideWrapper id='side-selector'>
            <button className='side-nav-close' onClick={()=> SideHandler()}></button>
            <div className="style-wrapper">
                <button className='nav-link-btn' onClick={()=> SideLinkHandler('#educacion')}>Educación<div className='btn-bg'/></button>
                <button className='nav-link-btn' onClick={()=> SideLinkHandler('#personal')}>Personal<div className='btn-bg'/></button>
                <button className='nav-link-btn' onClick={()=> SideLinkHandler('#aprendizaje')}>Aprensizaje<div className='btn-bg'/></button>
                <button className='nav-link-btn' onClick={()=> SideLinkHandler('#ropero')}>Ropero<div className='btn-bg'/></button>
                <button className='nav-link-btn' onClick={()=> SideLinkHandler('#redes')}>Redes<div className='btn-bg'/></button>
                <button className='nav-link-btn' onClick={()=> SideLinkHandler('#mentores')}>Mentores<div className='btn-bg'/></button>
                <button className='nav-link-btn' onClick={()=> SideLinkHandler('#inspiracion')}>Inspiración<div className='btn-bg'/></button>
                <div className='fillout'/>
            </div>
        </SideWrapper>
    )
}
