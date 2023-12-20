import { Link } from 'gatsby'
// import React from "react"
import './styles.css'
import { NavBar, SideNav } from './nav.jsx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useEffect } from "react";
import { graphql } from 'gatsby';

export const query = graphql`
{
  allPrismicHome {
    nodes {
      data {
        sm_entry_3 {
          sm_title_3 {
            text
          }
          sm_logo_3 {
            gatsbyImageData
          }
          sm_link_3 {
            url
          }
        }
        sm_entry_2 {
          sm_title_2 {
            text
          }
          sm_logo_2 {
            gatsbyImageData
          }
          sm_link_2 {
            url
          }
        }
        sm_entry_1 {
          sm_title_1 {
            text
          }
          sm_logo_1 {
            gatsbyImageData
          }
          sm_link_1 {
            url
          }
        }
        section_7_title {
          text
        }
        section_7_paragraph {
          text
        }
        section_5_title_sm {
          text
        }
        section_4_title {
          text
        }
        section_4_paragraph {
          text
        }
        section_3_title {
          text
        }
        section_3_paragraph {
          text
        }
        section_2_title {
          text
        }
        section_2_paragraph_2 {
          text
        }
        section_2_paragraph_1 {
          text
        }
        section_1_title {
          text
        }
        section_1_paragraph {
          text
        }
        imagen_fondo_encabezado {
          gatsbyImageData
        }
        header_hero_title {
          text
        }
        body {
          ... on PrismicHomeDataBodyMentor {
            items {
              mentor_title {
                text
              }
              mentor_paragraph {
                text
              }
              mentor_img {
                gatsbyImageData
              }
            }
            primary {
              section_6_title {
                text
              }
            }
          }
        }
      }
    }
  }
}`;


const IndexPage = (props) => {

  const clickMedia = (target) => {
    const targetElement = document.getElementById(target);
    targetElement.click();
  };

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
    }, {
      threshold: 0.6
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
  
  const mentoresArray = props.data.allPrismicHome.nodes[0].data.body[0].items ;

  const titles = [
    props.data.allPrismicHome.nodes[0].data.section_1_title.text,
    props.data.allPrismicHome.nodes[0].data.section_2_title.text,
    props.data.allPrismicHome.nodes[0].data.section_3_title.text,
    props.data.allPrismicHome.nodes[0].data.section_4_title.text,
    props.data.allPrismicHome.nodes[0].data.section_5_title_sm.text,
    props.data.allPrismicHome.nodes[0].data.body[0].primary.section_6_title.text,
    props.data.allPrismicHome.nodes[0].data.section_7_title.text,
  ];

  // console.log('log => ', mentoresArray);

  return (
    <main>
      <NavBar titles={titles}/>
      <SideNav titles={titles}/>
      <section className='header'>
        <GatsbyImage id='header-bg-img' image={getImage(props.data.allPrismicHome.nodes[0].data.imagen_fondo_encabezado.gatsbyImageData)} />
        <h1 className='header-headline'>{props.data.allPrismicHome.nodes[0].data.header_hero_title.text}</h1>
      </section>

      <div className='column'>
        <section id="educacion" className="educacion main-section">
          <h1 className='default-header'>{props.data.allPrismicHome.nodes[0].data.section_1_title.text}</h1>
          <p className='default-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nihil porro earum iusto dolorem repellendus dolores possimus esse, fugit necessitatibus at ducimus. Cumque, architecto? Adipisci ipsam nisi commodi vero eius officiis odit sequi et illum eum nesciunt molestias accusamus, tempore mollitia. Quasi tenetur eius doloribus possimus delectus sunt voluptates distinctio animi itaque aliquam, commodi odit amet sit consequatur alias quia veniam voluptas exercitationem natus illo aperiam obcaecati, minima quas at! Molestiae beatae veritatis autem voluptatum, fuga corporis quibusdam facilis assumenda explicabo recusandae rerum cum in quas quis nostrum, quos dolorem hic quasi! Doloribus numquam ullam, commodi atque nostrum accusantium illum quo reiciendis. Atque voluptates veritatis rem minus repellat aut voluptatibus provident sed. Reprehenderit minus sapiente blanditiis iste ad laboriosam, facilis deserunt provident asperiores et sint magni eaque necessitatibus deleniti odio quidem quisquam maiores</p>
        </section>
        
        
        <section id="personal" className="personal main-section">
          <h1 className='default-header'>{props.data.allPrismicHome.nodes[0].data.section_2_title.text}</h1>
          <div className="personal-wrapper">

            <p className='default-paragraph personal-p-1'>{props.data.allPrismicHome.nodes[0].data.section_2_paragraph_1.text}</p>
            
            <p className='default-paragraph personal-p-2'>{props.data.allPrismicHome.nodes[0].data.section_2_paragraph_2.text}</p>
          </div>
        </section>
        
        
        <section id="aprendizaje" className="aprendizaje main-section">
          <h1 className='default-header'>{props.data.allPrismicHome.nodes[0].data.section_3_title.text}</h1>
          <p className="default=paragraph">{props.data.allPrismicHome.nodes[0].data.section_3_paragraph.text}</p>
          <Link to='' id='btn-other-half'>acceder</Link>
        </section> 

        <section id="ropero" className="ropero main-section">
          <h1 className='default-header'>{props.data.allPrismicHome.nodes[0].data.section_4_title.text}</h1>
          <p>{props.data.allPrismicHome.nodes[0].data.section_4_paragraph.text}</p>
          <Link id='shop-btn' to=''>Ver stock</Link>
        </section>

        <section id="redes" className="redes main-section">
          <div className="blog">
            <h1>{props.data.allPrismicHome.nodes[0].data.section_5_title_sm.text}</h1>
          </div>
          <div className="instagram">
            <h1 onClick={()=>clickMedia("clic-ig")}>{props.data.allPrismicHome.nodes[0].data.sm_entry_1[0].sm_title_1.text}</h1>
            <div onClick={()=>clickMedia("clic-ig")} className='hover-bg-ig'></div> 
            <a id='clic-ig' href={props.data.allPrismicHome.nodes[0].data.sm_entry_1[0].sm_link_1.url} target='_blank'>
              <GatsbyImage id='ig-logo' height="80px" width="80px" image={getImage(props.data.allPrismicHome.nodes[0].data.sm_entry_1[0].sm_logo_1.gatsbyImageData)} />
            </a>
          </div>

          <div className="youtube">
            <a id='clic-yt' href={props.data.allPrismicHome.nodes[0].data.sm_entry_2[0].sm_link_2.url} target='blank_'>
              <GatsbyImage id='yt-logo' height="80px" width="80px" image={getImage(props.data.allPrismicHome.nodes[0].data.sm_entry_2[0].sm_logo_2.gatsbyImageData)} />
            </a>
            <div onClick={()=>clickMedia("clic-yt")} className='hover-bg-yt'></div>
            <h1 onClick={()=>clickMedia("clic-yt")}>{props.data.allPrismicHome.nodes[0].data.sm_entry_2[0].sm_title_2.text}</h1>  
          </div>

          <div className="twitter">
            <h1 onClick={()=>clickMedia("click-x")}>{props.data.allPrismicHome.nodes[0].data.sm_entry_3[0].sm_title_3.text}</h1>
            <div onClick={()=>clickMedia("click-x")} className='hover-bg-x'></div>
            <a id='click-x' href={props.data.allPrismicHome.nodes[0].data.sm_entry_3[0].sm_link_3.url} target='_blank'>
              <GatsbyImage id='x-logo' height="80px" width="80px" image={getImage(props.data.allPrismicHome.nodes[0].data.sm_entry_3[0].sm_logo_3.gatsbyImageData)} />
            </a>
          </div>
        </section>

        <section id="mentores" className="mentores main-section">
          <h1 className='default-header'>{props.data.allPrismicHome.nodes[0].data.body[0].primary.section_6_title.text}</h1>
            {mentoresArray.map((obj, index) => (
              <div className="marco-default-mentores fade-in" key={index}>
                <GatsbyImage className='img-m' image={obj.mentor_img.gatsbyImageData}></GatsbyImage>
                <h2>{obj.mentor_title.text}</h2>
                <p>{obj.mentor_paragraph.text}</p>
              </div>
            ))}

        </section>  
        <section id="inspiracion" className="inspiracion main-section">
          <h1 className='default-header'>{props.data.allPrismicHome.nodes[0].data.section_7_title.text}</h1>
        </section>
      </div>
    </main>
  )
}

export default IndexPage;

export const Head = (props) => <title>{props.data.allPrismicHome.nodes[0].data.header_hero_title.text}</title>
