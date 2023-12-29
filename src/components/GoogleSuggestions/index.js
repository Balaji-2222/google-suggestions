import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchInput: '', detailsList: suggestionsList}

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searching = id => {
    const {detailsList} = this.state
    const data = detailsList.filter(eachItem => eachItem.id === id)
    this.setState({detailsList: data})
  }

  render() {
    const {searchInput, detailsList} = this.state
    const filteredList = detailsList.filter(eachItem =>
      eachItem.suggestion.includes(searchInput),
    )
    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image1"
        />

        <div className="insideContainer">
          <div className="inside1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="image2"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.changeSearchInput}
            />
          </div>
          <ul className="overallContainer">
            {filteredList.map(eachItem => (
              <SuggestionItem
                suggestionsList={eachItem}
                key={eachItem.id}
                searching={this.searching}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
