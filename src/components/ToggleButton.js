import React from 'react'
import PropTypes from 'prop-types'
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

  return (
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

ToggleButton.propTypes = {
  condition: PropTypes.bool,
  style: PropTypes.object,
  positiveText: PropTypes.string,
  negativeText: PropTypes.string,
  className: PropTypes.string,
  onPositiveClick: PropTypes.func,
  onNegativeClick: PropTypes.func
}

ToggleButton.defaultProps = {
  condition: false,
  style: {},
  positiveText: "Add",
  negativeText: "Remove",
  className: "",
  onPositiveClick: () => { },
  onNegativeClick: () => { }
}


export default ToggleButton;