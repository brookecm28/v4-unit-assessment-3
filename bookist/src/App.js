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
      books: Data
    }
  }

  render () {
  return (
    <div className="App">
      <Header />
      <div className="notHeader">
        <BookList books={this.state.books}/>
        {console.log(this.state.books)}
        <Shelf />
      </div>
    </div>
  )}
}

export default App;
