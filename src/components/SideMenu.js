import React from 'react'
import './stylesheets/SideMenu.css'

const SideMenu = ({ children, onClick }) =>
  <div onClick={onClick} className='side-menu'>
    <span className='side-menu-close'>&times;</span>
    {children}
  </div>

export default SideMenu;
