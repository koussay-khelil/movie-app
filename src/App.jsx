import React, { Component } from 'react';
import Container from './container'
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  state = {
    movies: [], value: '',
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

  render() {
    return (
      <div>

        <Container movies={this.state.movies} value={this.state.value} onInputChange={this.onInputChange} addMovie={this.addMovie} clearInputValue={this.clearInputValue} image={this.image} year={this.year} rate={this.rate} />
      </div>
    );
  }
}

export default App;
