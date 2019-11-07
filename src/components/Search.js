import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './stylesheets/Search.css'

const Search = () => {

  return(
    <form className='search-form'>
      <input type='text' 
        placeholder='Поиск товара' 
        name='query'
      />
      <button className='search-button'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </form>
  )
}

export default Search;