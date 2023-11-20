import { Link } from 'gatsby'
// import React from "react"
import './styles.css'
import { NavBar, SideNav } from './nav.jsx'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect } from "react";


const IndexPage = () => {

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  const divs = document.querySelectorAll(".fade-in");
  divs.forEach((div) => {
    observer.observe(div);
  });

  // Clean up the observer when the component unmounts
  return () => {
    divs.forEach((div) => {
      observer.unobserve(div);
    });
  };
}, []);


  return (
    <main>
      <NavBar />
      <SideNav />
      <section className='header'>
        <StaticImage id='header-bg-img' src='../images/stock-img-protrait.jpeg'></StaticImage>
        <h1 className='header-headline'>Hola, yo soy Monica</h1>
      </section>
      <div className='column'>
        <section id="educacion" className="educacion main-section">
          <h1 className='default-header'>Educación</h1>
          <p className='default-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam nisi commodi vero eius officiis odit sequi et illum eum nesciunt molestias accusamus, tempore mollitia. Quasi tenetur eius doloribus possimus delectus sunt voluptates distinctio animi itaque aliquam, commodi odit amet sit consequatur alias quia veniam voluptas exercitationem natus illo aperiam obcaecati, minima quas at! Molestiae beatae veritatis autem voluptatum, fuga corporis quibusdam facilis assumenda explicabo recusandae rerum cum in quas quis nostrum, quos dolorem hic quasi! Doloribus numquam ullam, commodi atque nostrum accusantium illum quo reiciendis. Atque voluptates veritatis rem minus repellat aut voluptatibus provident sed. Reprehenderit minus sapiente blanditiis iste ad laboriosam, facilis deserunt provident asperiores et sint magni eaque necessitatibus deleniti odio quidem quisquam maiores</p>
        </section>
        
        
        <section id="personal" className="personal main-section">
          <h1>Personal</h1>
          <div className="personal-wrapper">

            <p className='default-paragraph personal-p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit molestias quam in minima amet architecto consequuntur nobis possimus eveniet odio fugit soluta ipsum tempora, delectus dolorem? Minima animi magnam</p>
            
            <p className='default-paragraph personal-p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit molestias quam in minima amet architecto consequuntur nobis possimus eveniet odio fugit soluta ipsum tempora, delectus dolorem? Minima animi magnam</p>
          </div>
        </section>
        
        
        <section id="aprendizaje" className="aprendizaje main-section">
          <h1>Aprendizaje</h1>
          <p className="default=paragraph">aprende directamente de mi, en base a todas mis experiencias y conocimientos</p>
          <Link to='' id='btn-other-half'>acceder</Link>
        </section> 
        <section id="ropero" className="ropero main-section">
          <h1>Ropero</h1>
          <p>Averigua acerca del tipo de ropa estamos vendiendo</p>
          <Link id='shop-btn' to=''>Ver stock</Link>
        </section>
        <section id="redes" className="redes main-section">
          <div className="blog">
            <h1>Blog</h1>
          </div>

          <div className="instagram">
            <h1>Instagram</h1>
            <div className='hover-bg-ig'></div> 
            <a href='https://instagram.com' target='_blank'>
              <StaticImage id='ig-logo' src='../images/ig-logo.png' />
            </a>
          </div>

          <div className="youtube">
            <a href='https://youtube.com' target='blank_'><StaticImage id='yt-logo' src='../images/youtube-icon.png'></StaticImage>
            </a>
            <div className='hover-bg-yt'></div>
            <h1>Youtube</h1>  
          </div>

          <div className="twitter">
            <h1>Twitter(X)</h1>
            <div className='hover-bg-x'></div>
            <a href='https://x.com' target='blank_'><StaticImage id='x-logo' src='../images/twitter-logo.png'></StaticImage>
            </a>
          </div>
        </section>


        <section id="mentores" className="mentores main-section">
          <h1>Mentores</h1>

          <div className="marco-default-mentores fade-in">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>
          <div className="marco-default-mentores fade-in">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>
          <div className="marco-default-mentores fade-in">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>
          <div className="marco-default-mentores fade-in">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>

          <div className="marco-default-mentores fade-in">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>
          <div className="marco-default-mentores fade-in">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>
          <div className="marco-default-mentores fade-in">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>
          <div className="marco-default-mentores fade-in">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>

          <div className="marco-default-mentores fade-in sLast">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>
          <div className="marco-default-mentores fade-in last">
            <StaticImage className='img-m' src='../images/stock-img-protrait.jpeg'></StaticImage>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam</p>
          </div>


        </section>
        <section id="inspiracion" className="inspiracion main-section">
          <h1>Inspiración</h1>
        </section>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Monica -Inicio</title>
