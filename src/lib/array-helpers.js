import {compose} from 'redux'

export const getFirstArrayElement = array => array[0]

export const findElementById = (array, id) => 
  array.filter(item => item._id === id)

export const findById = compose(
  getFirstArrayElement,
  findElementById
)