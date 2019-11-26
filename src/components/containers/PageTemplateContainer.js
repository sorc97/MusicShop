import { connect } from 'react-redux'
import { toggleSideMenu } from '../../redux/actionCreators'
import PageTemplate from '../PageTemplate'

const PageTemplateContainer = connect(
  ({ isSideMenuOpen }) => ({
    isSideMenuOpen
  }),
  dispatch => ({
    sideMenuClickHandler() {
      dispatch(toggleSideMenu());
    }
  })
)(PageTemplate) 

export default PageTemplateContainer
