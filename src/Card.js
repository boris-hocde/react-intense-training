import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  transition: transform 300ms;

  &:hover {
    transform: scale(1.1);
  }
`

const Card = ({ picture, title, text, footer }) =>
  <StyledCard className="card">
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
  </StyledCard>

export default Card
