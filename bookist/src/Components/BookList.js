import React, {Component} from 'react'
import Shelf from './Shelf'

class BookList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    const mappedBooks = this.props.books.map((element, index) => {
        return <Shelf
        book={element}
        index={index}
        />
    })
    return (
      <div className='book-list'>{mappedBooks}</div>
    )
  }
}

export default BookList