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
  <main className='main-wrapper'>
    <div className='container'>
      <div className='main-inner'>
        <Categories categoriesItems={categoriesItems}/>
        <Products/>
      </div>
    </div>
  </main>

export default MainWrapper