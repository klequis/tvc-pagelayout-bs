// TechLogo

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.css';
import classNames from 'classnames'
import * as ku from '../../../../lib/ke-utils'

const TechLogo = (props) => {
  const imageStyle = classNames(
    {
      // 'tech-logo-image': true,
      [props.style]: props.style ? true : false,
    }
  )

  ku.log('TechLogo: props.numberCols', props.numberCols, 'blue')

  return (
    <Col sm={props.numberCols} className='logo-item'>
      <Row>
        <img className={imageStyle} src={props.url} alt="logo" />
      </Row>
      <Row>
        <span className='logo-text'>{props.name}</span>
      </Row>
    </Col>

  )
}

export default TechLogo;
