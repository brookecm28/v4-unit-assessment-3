import React, {Component} from 'react'

class SearchBar extends Component {
  constructor () {
    super ()
    this.state = {
        userInput: ''
    }
  }

  handleOnChange (e) {
    this.setState ({
      userInput: e.target.value
    })
    console.log(this.state.userInput)
  }

//   handleClick () {
//     this.props.filterBooks(this.state.userInput)
//   }

  render () {
    return (
      <div className='search-container'>
        <input 
          placeholder='Search'
          onChange={e => this.handleOnChange(e)}
        />
        <button 
            onClick={() => this.props.filterBooks(this.state.userInput)}>search          
        </button>
        <button>
          clear search
        </button>
      </div>
    )
  }

}

export default SearchBar