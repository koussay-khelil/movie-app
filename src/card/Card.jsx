import React from 'react'
import Stars from 'movie/stars'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({
  title, year, image, rating,
}) => (
  <div className="card">
    <div className="header" style={{ backgroundImage: `url(${image})` }}>
      <div className="rate"> <Stars factor={rating} /></div>
    </div>
    <div className="body">
      {title} -{year}-
    </div>

  </div>
)

Card.propTypes = {

  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,


}

export default Card
