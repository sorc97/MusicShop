import React from 'react'
import ProductsSection from '../ProductsSection/ProductsSection'
import ProductInfoContainer from '../ProductInfo/ProductInfoContainer'
import CartContainer from '../Cart/CartContainer'
import PageTemplate from '../PageTemplate/PageTemplate'
import Error404 from '../Error404/Error404'
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
      <Route path='/product/:id' component={ProductInfoContainer} />
      <Route path='/cart' component={CartContainer} />
      <Route component={Error404} />
    </Switch>
  </PageTemplate>

export default App