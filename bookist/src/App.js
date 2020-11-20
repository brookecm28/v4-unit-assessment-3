import './App.css';
import React, {Component} from 'react'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import Data from './data'
import SearchBar from './Components/SearchBar'
import data from './data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: Data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
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

  filterBooks(input) {
    input = input.toLowerCase()
    const filteredBooks = this.state.books.filter((element, index) => {
      if (element.title.toLowerCase().includes(input) || element.author.toLowerCase().includes(input))
      return element
    })
    console.log(input)
    console.log(filteredBooks)
    this.setState ({
      books: filteredBooks
    })
  }

  clearSearch (userInput) {
    this.setState ({
      books: Data
    })
    userInput = ''
  }

  render () {
  return (
    <div className="App">
      <Header />
      <div className='bar-holder'>
        <SearchBar
          filterBooks={this.filterBooks}
          clearSearch={this.clearSearch}
        />
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
