import React from 'react'
import ProductsSection from '../ProductsSection'
import AboutProduct from '../containers/AboutProduct'
import CartContainer from '../containers/CartContainer'
import PageTemplate from '../PageTemplate/PageTemplate'
import Error404 from '../Error404'
import { Route, Switch } from 'react-router-dom'
import './App.css'

const App = () =>
  <PageTemplate>
    <Switch>
      <Route exact path='/' component={ProductsSection} />
      <Route path={[
        '/sort/:sortValue',
        '/category/:category',
        '/search/:search'
      ]} component={ProductsSection} />
      <Route path='/product/:id' component={AboutProduct} />
      <Route path='/cart' component={CartContainer} />
      <Route component={Error404} />
    </Switch>
  </PageTemplate>

export default App