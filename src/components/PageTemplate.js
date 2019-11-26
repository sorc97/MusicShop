import React from 'react'
import HeaderContainer from './containers/HeaderContainer'
import Footer from './Footer'
import { logo } from '../lib/config'
import SideMenu from './SideMenu'
import Categories from './Categories'
import { categoriesList } from '../lib/config'

const PageTemplate = ({ 
  children, 
  isSideMenuOpen, 
  sideMenuClickHandler 
}) => 
  <div className='wrapper'>
    {isSideMenuOpen && 
      <SideMenu onClick={sideMenuClickHandler}>
        <Categories categoriesList={categoriesList}/>
      </SideMenu>
    }
    <HeaderContainer/>
      {children}
    <Footer logo={logo}/>
  </div>

export default PageTemplate;