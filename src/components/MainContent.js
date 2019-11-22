import React from 'react'
import Categories from './Categories'
import Products from './Products'
import { categoriesList } from '../lib/config'
import './stylesheets/MainContent.css'

const MainWrapper = () =>
  <main className='main-wrapper'>
    <div className='container'>
      <div className='main-inner'>
        <Categories 
          categoriesList={categoriesList}/>
        <Products/>
      </div>
    </div>
  </main>

export default MainWrapper