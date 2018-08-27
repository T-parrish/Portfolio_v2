import React from 'react'



const AboutDetails = ({title, p1, p2, p3}) => {
  return (
    <div className="about__details">
      <h1>{title}</h1>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      
    </div>
  )
}

export default AboutDetails