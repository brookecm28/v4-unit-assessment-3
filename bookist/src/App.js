import './App.css';
import React, {Component} from 'react'
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import Data from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: Data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
  }

  addToShelf(addedBook) {
    this.setState ({
      shelf: [...this.state.shelf, addedBook]
    })
    console.log(addedBook)
  }

  render () {
  return (
    <div className="App">
      <Header />
      <div className="notHeader">
        <BookList addToShelf={this.addToShelf} books={this.state.books}/>
        {console.log(this.state.books)}
        <Shelf shelf={this.state.shelf}/>
      </div>
    </div>
  )}
}

export default App;
