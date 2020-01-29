import React from 'react'
import PropTypes from 'prop-types'
import HeaderContainer from './Header/HeaderContainer'
import SideMenuContainer from './SideMenu/SideMenuContainer'
import Footer from './Footer/Footer'
import CategoriesList from '../CategoriesList/CategoriesList'
import { categoriesList, logo } from '../../config'

const PageTemplate = ({
  children
}) =>
  <div className='wrapper'>
    <SideMenuContainer>
      <CategoriesList categories={categoriesList} />
    </SideMenuContainer>
    <HeaderContainer />
    {children}
    <Footer logo={logo} />
  </div>

PageTemplate.propTypes = {
  children: PropTypes.node
}

export default PageTemplate