import React, { Component } from 'react'
import ZoomSlider from 'react-instagram-zoom-slider'
 
function Zoom() {
  const slides = [<img src="./img/hero.jpg" alt="First slide" /> ]
 
  return <ZoomSlider slides={slides} slideIndicatorTimeout={null} 
    style={{
      width: "200px",
      height: "200px"
    }}/>
}

export default Zoom;