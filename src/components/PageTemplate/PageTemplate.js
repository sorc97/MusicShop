import React from 'react'
import PropTypes from 'prop-types'
import HeaderContainer from './Header/HeaderContainer'
import SideMenuContainer from './SideMenu/SideMenuContainer'
import Footer from './Footer/Footer'
import Categories from '../Categories/Categories'
import { logo } from '../../lib/config'
import { categoriesList } from '../../lib/config'

const PageTemplate = ({
  children
}) =>
  <div className='wrapper'>
    <SideMenuContainer>
      <Categories categoriesList={categoriesList} />
    </SideMenuContainer>
    <HeaderContainer />
    {children}
    <Footer logo={logo} />
  </div>

PageTemplate.propTypes = {
  children: PropTypes.node
}

export default PageTemplate;