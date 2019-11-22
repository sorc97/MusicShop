import React from 'react'
import HeaderContainer from './containers/HeaderContainer'
import Footer from './Footer'
import { logo } from '../lib/config'

const PageTemplate = ({ children }) => 
  <div className='wrapper'>
    <HeaderContainer/>
      {children}
    <Footer logo={logo}/>
  </div>

export default PageTemplate;