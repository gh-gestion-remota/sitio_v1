import * as React from "react"
import './styles.css'
import NavBar from './nav.jsx'
// import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <div className='column'>

        <section id="educacion" className="educacion main-section">
          <h1>educación</h1>
        </section>
        <section id="personal" className="personal main-section">
          <h1>personal</h1>
        </section>
        <section id="aprendizaje" className="aprendizaje main-section">
          <h1>aprendizaje</h1>
        </section> 
        <section id="ropero" className="ropero main-section">
          <h1>ropero</h1>
        </section>
        <section id="redes" className="redes main-section">
          <div className="blog">
            <h1>blog</h1>
          </div>
          <div className="instagram">
            <h1>instagram</h1>
          </div>
          <div className="twitter">
            <h1>twitter</h1>
          </div>
          <div className="youtube">
            <h1>youtube</h1>
          </div>
        </section>
        <section id="mentores" className="mentores main-section">
          <h1>mentores</h1>
        </section>
        <section id="inspiracion" className="inspiracion main-section">
          <h1>inspiración</h1>
        </section>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
