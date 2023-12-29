import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, searching} = props
  const {id, suggestion} = suggestionsList

  const searchItem = () => {
    searching(id)
  }

  return (
    <li className="list-container">
      <p className="para">{suggestion}</p>
      <button className="button1" type="button" onClick={searchItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrowimage"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
