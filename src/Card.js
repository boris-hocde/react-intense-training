import React from 'react'

const Card = ({ picture, title, text, footer }) =>
  <div className="card">
    <img className="card-img-top" src={picture} alt={title} width="100%" />
    <div className="card-block">
      <h4 className="card-title">
        {title}
      </h4>
      <div className="card-text">
        {text}
      </div>
    </div>
    <div className="card-footer text-muted">
      {footer}
    </div>
  </div>

export default Card
