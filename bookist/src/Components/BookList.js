import React, {Component} from 'react'
import Shelf from './Shelf'

class BookList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    const mappedBooks = this.props.books.map((element, index) => {
        return (
       
          <div className='book-container'>
            <img alt={this.props.books.title} className='list-img' src={this.props.books[index].img} />
            <h3 className='list-title'>{this.props.books[index].title}</h3>
            <p className='list-author'>{this.props.books[index].author}</p>
          </div>
        
        )
    })
    return (
      <div className='list-container'>
           <div className='book-list'>{mappedBooks}</div>
      </div>
    )
  }
}

export default BookList