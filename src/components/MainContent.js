import React from 'react'
import Categories from './Categories'
import Products from './Products'
import './stylesheets/MainContent.css'

let categoriesItems = [
  'Электронные гитары',
  'Акустические гитары',
  'Бас гитары',
  'Клавишные',
  'Ударные',
  'Микрофоны',
  'Звуковое оборудование',
  'Dj-оборудование'
]

const MainWrapper = () =>
  <div className='main-wrapper'>
    <Categories categoriesItems={categoriesItems}/>
    <Products/>
  </div>

export default MainWrapper