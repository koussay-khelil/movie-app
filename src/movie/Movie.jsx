import React from 'react'
import PropTypes from 'prop-types'
import Stars from './stars'
import './Movie.scss'

const Movie = ({ image, title }) => (
  <div className="movie">
    <div className="movie-card">
      <img className="poster" alt="movie poster" src={image} />
      <div className="title">
        <h4>{title}</h4>
      </div>
    </div>
  </div>
)

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Movie
