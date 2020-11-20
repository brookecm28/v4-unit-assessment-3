import './App.css';
import React, {Component} from 'react'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import Data from './data'
import SearchBar from './Components/SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: Data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
  }

  addToShelf(addedBook) {
    if (this.state.shelf.includes(addedBook)) {
      return this.state.shelf
    } else {
    this.setState ({
      shelf: [...this.state.shelf, addedBook]
    })}
  }

  clearShelf() {
    this.setState ({
      shelf: []
    })
  }

  render () {
  return (
    <div className="App">
      <Header />
      <div className='bar-holder'>
        <SearchBar />
      </div>
      <div className="notHeader">
        <BookList 
          addToShelf={this.addToShelf} 
          books={this.state.books}
        />
        <Shelf 
          shelf={this.state.shelf}
          clearShelf={this.clearShelf}
        />
      </div>
    </div>
  )}
}

export default App;
