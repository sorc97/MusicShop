import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = ({ 
  currentAmount, countUp, countDown 
}) =>
  <div className='counter'>
    <button
      onClick={countUp}
    >
      +
    </button>
    <span className='counter-display'>
      {currentAmount}
    </span>
    <button
      disabled={(currentAmount > 1) ? false : true}
      onClick={countDown}
    >
      -
    </button>
  </div>

Counter.propTypes = {
  currentAmount: PropTypes.number,
  countUp: PropTypes.func,
  countDown: PropTypes.func
}

Counter.defaultProps = {
  currentAmount: 0,
  countUp: () => { },
  countDown: () => { }
}

export default Counter;