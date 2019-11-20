import React from 'react';
import './stylesheets/Counter.css'

const Counter = ({currentAmount, countUp, countDown}) => 
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
      disabled={(currentAmount > 1)? false: true}
      onClick={countDown} 
    >
      -
    </button>
  </div>

export default Counter;