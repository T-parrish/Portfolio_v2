import React from 'react';
import classnames from 'classnames';

const AboutDetails = ({title, p1, p2, fade}) => {
  return (
    <div className={
      classnames("about__details", 
        {'about__details-fade' : fade})}>
      <h1 className="about__details-title">{title}</h1>
      <p>{p1}</p>
      <p>{p2}</p>
    </div>
  )
}

export default AboutDetails