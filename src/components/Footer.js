import React from 'react'

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__copyright">
        <h4>Copyright Taylor Parrish 2018</h4>
      </div>
      <div className="footer__social">
        <a href="https://www.twitter.com/twpearish" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/et.and.me" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.soundcloud.com/50crates" target="_blank">
          <i className="fab fa-soundcloud"></i>
        </a>
        <a href="https://www.linkedin.com/in/taylor-parrish-55663379" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/t-parrish" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer