import React from 'react'
import PageTemplate from './PageTemplate'
import ProductsSection from './ProductsSection'
import AboutProduct from './containers/AboutProduct'
import CartContainer from './containers/CartContainer'
import Error404 from './Error404'
import { Route, Switch } from 'react-router-dom'
import './stylesheets/App.css'

const App = () =>
  <PageTemplate>
    <Switch>
      <Route exact path='/' component={ProductsSection}/>
      <Route path={[
        '/sort/:sortValue',
        '/category/:category',
        '/search/:search'
      ]} component={ProductsSection}/>
      <Route path='/product/:id' component={AboutProduct}/>
      <Route path='/cart' component={CartContainer}/>
      <Route component={Error404}/>
    </Switch>
  </PageTemplate>

export default App;