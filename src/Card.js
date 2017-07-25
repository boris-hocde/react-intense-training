import React from 'react'

const Card = ({ picture, title, text }) =>
  <div className="card">
    <img className="card-img-top" src={picture} alt={title} width="100%" />
    <div className="card-block">
      <h4 className="card-title">
        {title}
      </h4>
      <p className="card-text">
        {text}
      </p>
    </div>
  </div>

export default Card
