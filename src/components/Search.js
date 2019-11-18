import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './stylesheets/Search.css'

const Search = ({fetchData, history}) => {
  let _searchQuery;

  const submit = (e) => {
    e.preventDefault();
    let query = _searchQuery.value;

    history.push(`/search/${query}`);

    console.log(query);
    fetchData(`/api/products/search/${query}`)
    
    _searchQuery.value = '';
  }

  return(
    <form className='search-form' onSubmit={submit}>
      <input type='text' 
        placeholder='Поиск товара' 
        name='query'
        ref={input => _searchQuery = input}
      />
      <button className='search-button'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </form>
  )
}

export default Search;