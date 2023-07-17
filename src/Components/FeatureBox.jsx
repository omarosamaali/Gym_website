import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt='Unkwon'/>
      </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>t Lorem Ipsum, giving information on its origins, as well as a random .</p>
      </div>
    </div>
  )
}

export default FeatureBox;
