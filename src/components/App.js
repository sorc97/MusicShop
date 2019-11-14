import React from 'react'
import Header from './Header'
import MainWrapper from './MainContent'
import Footer from './Footer'
import {ProductInfoContainer} from '../redux/Containers'
import { Route, Switch } from 'react-router-dom'
import './stylesheets/App.css'


const App = () =>
  <div className='wrapper'>
    <Header logo='MusicShop'/>
    <Switch>
      <Route exact path='/' component={MainWrapper}/>
      <Route path='/product/:id' component={ProductInfoContainer}/>
    </Switch> 
    <Footer logo="MusicShop"/>
  </div>

export default App