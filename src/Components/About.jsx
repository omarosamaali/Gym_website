import React from 'react';
import aboutImage from '../images/about.png';
function About(){
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutImage} alt=''/>
      </div>
      <div className='about-text'>
        <h1>Learn More About Us</h1>
        <p>Why do we use it?
It is a long established fact that a 
reader will be distracted by the readable content 
of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
distribution of letters, as opposed to using 'Content here,</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default About
