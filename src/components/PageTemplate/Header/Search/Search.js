import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import './Search.css'

const Search = ({ history = {} }) => {
  let _searchQuery;

  const submit = (e) => {
    e.preventDefault();
    let query = _searchQuery.value;

    history.push(`/search/${query}`);

    _searchQuery.value = '';
  }

  return (
    <form className='search-form' onSubmit={submit}>
      <input type='text'
        placeholder='Поиск товара'
        name='query'
        ref={input => _searchQuery = input}
        required
      />
      <button className='search-button'>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  )
}

Search.propTypes = {
  history: PropTypes.object
}

export default withRouter(Search)