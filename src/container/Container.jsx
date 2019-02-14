import React, { Component } from 'react'
import Card from 'card'
import Search from 'search'
// import PropTypes from 'prop-types'
import './Container.scss'


export default class Container extends Component {
  state = {
    movies: [], value: '', filter: '',
  }

  filter = (name) => {
    this.setState({
      filter: name,
    })
  }

  year = () => {
    const year = prompt('enter year')
    return year
  }

  rate = () => {
    const rate = prompt('enter rating', '0-5')
    return rate
  }

  image = () => {
    const image = prompt('give image url')
    return image
  }


  onInputChange = (value) => {
    if (isNaN(Number(value[value.length - 1]))) {
      this.setState({
        value,
      })
    }
  }

  clearInputValue = () => {
    this.setState({
      value: '',
    })
  }


  addMovie = (movie) => {
    const newMovies = [...this.state.movies, movie]
    this.setState({
      movies: newMovies,
    })
    this.clearInputValue()
  }

  // static propTypes = {}

  render() {
    const { value, movies, filter } = this.state

    return (
      <div className="container">

        <Search
          onChange={(e) => { this.onInputChange(e.target.filter) }}
          onClick={() => { this.filter(filter) }}
          props={filter}
        />
        <input
          placeholder="title"
          value={value}
          onChange={(e) => { this.onInputChange(e.target.value) }}
        />
        <button
          type="submit"
          onClick={() => {
            this.addMovie(value)
          }}
        >add
        </button>


        {

          movies.map(movie => (<Card title={movie} rate="5" year={this.year()} rating={this.rate()} image={this.image()} />))
        }
        <Card image="https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg" rating="5" title="Star Wars" year="2017" />
      </div>
    )
  }
}
