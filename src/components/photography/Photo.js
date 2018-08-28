import React from 'react'

// <div style={{background:photoTarget, backgroundSize:'cover', backgroundRepeat:'no-repeat'}} className={`photos__photo-${idx}`}></div>

// <img 
//   style={{objectFit:'contain'}} 
//   src={url} 
//   className={`photos__photo-${idx}`} alt=""/>

export default ({url, idx}) => {
  const photoTarget = `url(${url})`
  
  return (
    <div className={`photos__photo`}>
    <div 
      style={{
        background:photoTarget, 
        backgroundSize:'cover', 
        backgroundRepeat:'no-repeat'}} 
        className={`photos__photo-${idx}`}>
      </div>
    </div>
  )
}
