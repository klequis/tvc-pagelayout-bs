// Header
import React from 'react'
import { Grid } from 'react-bootstrap'
import './style.css'

const Header = () => (
  <Grid id='header' fluid className='bg-black'>
    <Grid>
      <h1 className='green-text'>Tri-Valley Coders</h1>
      <h2>Learn, Build, Grow, Succeed</h2>
    </Grid>
  </Grid>
);

export default Header;
