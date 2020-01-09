import { connect } from 'react-redux'
import SideMenu from '../SideMenu'
import { toggleSideMenu } from '../../redux/actionCreators'

const SideMenuContainer = connect(
  ({ isSideMenuOpen }, { children }) => ({
    isSideMenuOpen,
    children
  }),
  dispatch => ({
    sideMenuClickHandler() {
      dispatch(toggleSideMenu());
    }
  })
)(SideMenu);

export default SideMenuContainer