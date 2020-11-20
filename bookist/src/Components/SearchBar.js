import React, {Component} from 'react'

class SearchBar extends Component {
  constructor () {
    super ()
    this.state = {
        userInput: ''
    }
  }

  render () {
    return (
      <div className='search-container'>
        <input 
          placeholder='Search'
        />
        <button>
          search
        </button>
        <button>
          clear search
        </button>
      </div>
    )
  }

}

export default SearchBar