import React, { Component } from 'react'
import Card from 'card'
import Search from 'search'
// import PropTypes from 'prop-types'
import './Container.scss'


export default class Container extends Component {
  // static propTypes = {}

  render() {
    const { value, movies } = this.props

    return (
      <div className="container">


        <input
          placeholder="title"
          value={value}
          onChange={(e) => { this.props.onInputChange(e.target.value) }}
        />
        <button
          type="submit"
          onClick={() => {
            this.props.addMovie(value)
          }}
        >add
        </button>


        {

          movies.map(movie => (<Card title={movie} rate="5" year={this.props.year()} rating={this.props.rate()} image={this.props.image()} />))
        }
        <Card image="https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg" rating="5" title="Star Wars" year="2017" />
      </div>
    )
  }
}
