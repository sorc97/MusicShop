import React from 'react'
import HeaderContainer from './containers/HeaderContainer'
import MainContent from './MainContent'
import Footer from './Footer'
import AboutProduct from './containers/AboutProduct'
import CartContainer from './containers/CartContainer'
import { Route, Switch } from 'react-router-dom'
import './stylesheets/App.css'


const App = () =>
  <div className='wrapper'>
    <HeaderContainer/>
    <Switch>
      <Route exact path='/' component={MainContent}/>
      <Route path={[
        '/sort/:sortValue',
        '/category/:category',
        '/search/:query'
      ]} component={MainContent}/>
      <Route path='/product/:id' component={AboutProduct}/>
      <Route path='/cart' component={CartContainer}/>
    </Switch> 
    <Footer logo="MusicShop"/>
  </div>

export default App