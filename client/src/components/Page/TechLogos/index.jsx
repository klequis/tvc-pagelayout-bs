// TechLogos
import React from 'react';
import { Grid, Row } from 'react-bootstrap'
import './style.css';
import TechLogo from './TechLogo';
import { basicsLogos, mernLogos } from './tech-logo-data'

const TechLogos = () => {
  const basics = basicsLogos.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      url={t.image}
      style={t.style}
      numberCols={basicsLogos.length + 1} // total hack
    />
  ))


  const mern = mernLogos.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      style={t.style}
      url={t.image}
      numberCols={mernLogos.length - 1} // total hack
    />
  ))
  return (
    <Grid id='tech-logos' fluid className='bg-green'>
      <Grid>
        <Row>
          <h1 className='section-title'>Learn With Us</h1>
        </Row>
        <Row>
          <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
          <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
        </Row>
        <Row className='center-in-col'>
          <h3 className='logo-title'>The Basics</h3>
        </Row>
        <Row className='center-in-col'>
          {basics}
        </Row>
        <Row className='center-in-col'>
          <h3 className='logo-title'>MERN Stack</h3>
        </Row>
        <Row className='center-in-col'>
          {mern}
        </Row>
      </Grid>
    </Grid>
  )
}

export default TechLogos;
