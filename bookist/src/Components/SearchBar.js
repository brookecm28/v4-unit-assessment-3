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

  handleClear () {
    this.setState ({
      userInput: ''
    })
  }

  render () {
    return (
      <div className='search-container'>
        <input 
          placeholder='Search'
          onChange={e => this.handleOnChange(e)}
          value={this.state.userInput}
        />
        <button 
            onClick={() => this.props.filterBooks(this.state.userInput)}>search          
        </button>
        <button
            onClick={() => {
                this.props.clearSearch(this.state.userInput)
                this.handleClear()}}>clear search
        </button>
      </div>
    )
  }

}

export default SearchBar