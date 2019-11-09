import React from 'react'
import Header from './Header'
import './stylesheets/App.css'
import MainWrapper from './MainContent'


const App = () =>
  <div className='wrapper'>
    <Header logo='MusicShop'/>
    <MainWrapper/>
  </div>

export default App