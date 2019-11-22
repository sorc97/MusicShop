import React from 'react';
import classNames from 'classnames'
import './stylesheets/AddToCartButton.css'

const ToggleButton = ({
  condition, 
  style, 
  positiveText, 
  negativeText, 
  className,
  onPositiveClick,
  onNegativeClick
}) => {

  const classes = classNames(
    className,
    condition && 'remove'
  )
  
  return(
    (!condition) ?
      <button
        className={classes}
        style={style}
        onClick={onPositiveClick}
      >
        {positiveText}
      </button>
      :
      <button
        className={classes}
        style={style}
        onClick={onNegativeClick}
      >
        {negativeText}
      </button>
  )
}

export default ToggleButton;