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
      <div>
        <h3>Your Shelf</h3>
        {mappedTitles}
      </div>
    )
  }
}

export default Shelf