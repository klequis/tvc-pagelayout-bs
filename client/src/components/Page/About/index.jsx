// About
import React from 'react'
import { Grid, Button } from 'react-bootstrap'
import './style.css'
import iMeetup from './meetup-swarm.svg'

const About = () => (
  <Grid id='about' fluid className='bg-black'>
    <Grid className='grid-about'>
      <p>Tri-Valley Coders is a place to learn the full gaumet of software development skills including: writing code, using developer tools and collaborating on projects. We offer the ability not just to learn but to work on actual software projects that will go live.</p>
      <p>We have a collaborative and supportive structure with roles for beginners as well as experienced devlopers learn new skills. Both our members and organizers bring a wide variety of experience and skill levels.</p>
      <p>We meet every Thursday from 9:00am to 12:00pm with emphasis on Web development using JavaScript, HTML, CSS and the MERN Stack. We also have periodic meetings focused on Python and Data Science. Check our schedule below for dates and times.</p>
      <div className='button-join-container'>
        <Button bsStyle='success' className='button-join'>
          <img src={iMeetup} width={35} className='join-button' alt='meetup logo'/>
          <span className='button-join-text'>Join Us via Meetup!</span>
        </Button>
      </div>

    </Grid>
  </Grid>
);

export default About;
