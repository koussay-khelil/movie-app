import React from 'react'
// import PropTypes from 'prop-types'
import './Add.scss'

const Add = ({ movie, index }) => (

  <div className="add">

    {movie}
    <div className="plus" />
    <input type="text" onChange={e => console.log(e)} />
    <input type="button" value="Add Movie" />
  </div>
)

// Add.propTypes = {
// }

export default Add
