import React from 'react'
import PropTypes from 'prop-types'
import HeaderContainer from './containers/HeaderContainer'
import SideMenuContainer from './containers/SideMenuContainer'
import Footer from './Footer'
import { logo } from '../lib/config'
import Categories from './Categories'
import { categoriesList } from '../lib/config'

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