import React from 'react'


const MicroPortfolio = ({
  name, 
  synopsis, 
  background, 
  color, 
  github, 
  livelink
}) => {
  return (
    <div className='portfolio-card__box'>
      <h6>{name}</h6>
    </div>
  )
}

export default MicroPortfolio
