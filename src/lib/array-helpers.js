import {compose} from 'redux'

export const getFirstArrayElement = array => array[0]

export const findElementById = (array, id) => 
  array.filter(item => item._id === id)

export const findById = compose(
  getFirstArrayElement,
  findElementById
)

const sortByHighPrice = field =>
  (a, b) => b[field] - a[field]

const sortByLowPrice = field =>
  (a, b) => a[field] - b[field]

const sortByString = field =>
  (a, b) => (a[field].toLowerCase() > b[field].toLowerCase()) ? 1: -1;


export const getSortFunction = (sortValue) => {
  switch(sortValue){
    case "BY_NAME":
      return sortByString('name')

    case "BY_HIGH_PRICE":
      return sortByHighPrice('price')

    case "BY_LOW_PRICE":
      return sortByLowPrice('price')

    default:
      return;
  }
}

export const sortProducts = (products, sortValue) => compose(
  fn => [...products].sort(fn),
  getSortFunction
)(sortValue)

export const filterByCategory = (array, category) => 
  array.filter(item => item.category === category)

export const firstLetterToUpperCase = (string) => {
  let [first, ...rest] = string;
  let upperFirst = first.toUpperCase();

  return [upperFirst, ...rest].join('');
}

export const getElementsFromArrayByInterval = (array, first, last) =>
  array.filter((item, i) => (i >= first && i <= last))

export const makeSearchParam = (init) =>
  new URLSearchParams(init)
  
export const makeUrlQuery = (name, value, currentQuery) => {
  let query = makeSearchParam(currentQuery);

  if(query.get(name)) {
    query.set(name, value);
  }else {
    query.append(name, value);
  }  
  return `?${query.toString()}`;
}

export const removeFromUrlQuery = (target, currentQuery) => {
  let query = makeSearchParam(currentQuery);
  query.delete(target);
  return `?${query.toString()}`
}

window.getElementsFromArrayByInterval = getElementsFromArrayByInterval;
