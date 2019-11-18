import React from 'react'
import Categories from './Categories'
import Products from './Products'
import {CategoriesContainer} from '../redux/Containers'
import './stylesheets/MainContent.css'

const MainWrapper = () =>
  <main className='main-wrapper'>
    <div className='container'>
      <div className='main-inner'>
        <CategoriesContainer />
        <Products/>
      </div>
    </div>
  </main>

export default MainWrapper