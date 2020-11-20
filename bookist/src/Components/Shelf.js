import React, {Component} from 'react'

class Shelf extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {

    const mappedTitles = this.props.shelf.map((element, index) => {
      return (
        <div>
          <p>{this.props.shelf[index]}</p>
        </div>
      )
     }
    )

    return (
      <div className='shelf-container'>
        <h3>Your Shelf</h3>
        <button
        onClick={() => this.props.clearShelf()}
        >clear shelf</button>
        {mappedTitles}
      </div>
    )
  }
}

export default Shelf