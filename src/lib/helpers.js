import { compose } from 'redux'
import cyrillicToTranslit from 'cyrillic-to-translit-js'

//Find Element by id
export const getFirstArrayElement = array => array[0]

export const findElementById = (array, id) =>
  array.filter(item => item._id === id)

export const findById = compose(
  getFirstArrayElement,
  findElementById
)

//Sorting
const sortHash = {
  name: "BY_NAME",
  highPrice: "BY_HIGH_PRICE",
  lowPrice: "BY_LOW_PRICE"
}
// Sort functions
const sortByHighPrice = field =>
  (a, b) => b[field] - a[field]

const sortByLowPrice = field =>
  (a, b) => a[field] - b[field]

const sortByString = field =>
  (a, b) => (a[field].toLowerCase() > b[field].toLowerCase()) ? 1 : -1;

// Choosing which sort we sould use
export const getSortFunction = (sortValue) => {
  switch (sortValue) {
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
// Get sort type by sort value 
export const getSort = (
  sortBy = "", hash = sortHash
) => hash[sortBy];

export const sortProducts = (products, sortValue) => compose(
  fn => [...products].sort(fn),
  getSortFunction,
  getSort
)(sortValue)

//Filtering
export const filterProducts = (array, key, filterValue) =>
  array.filter(item => item[key] === filterValue)

//Capitalizing
export const firstLetterToUpperCase = str =>
  str.charAt(0).toUpperCase() + str.slice(1);

//Get array elements by interval
export const getElementsFromArrayByInterval = (array, first, last) =>
  array.filter((item, i) => (i >= first && i <= last))

//Query methods
export const makeSearchParam = (init) =>
  new URLSearchParams(init)

export const makeQuery = (name, value) => query => {

  if (query.get(name)) {
    query.set(name, value);
  } else {
    query.append(name, value);
  }

  return query;
}

export const removeFromQuery = target => query => {
  query.delete(target);
  return query;
}

export const makeQueryString = query => `?${query.toString()}`

export const makeUrlQuery = (name, value, init) => compose(
  makeQueryString,
  makeQuery(name, value),
  makeSearchParam
)(init)

export const removeFromUrlQuery = (target, currentQuery) => compose(
  makeQueryString,
  removeFromQuery(target),
  makeSearchParam
)(currentQuery)

//Searching
export const searchByField = (array, field, query) =>
  array.filter(item =>
    item[field].toLowerCase().includes(query.toLowerCase())
  );

export const splitString = splitter => string =>
  string.split(splitter);

export const getElementsByFields = (array, query) => (fields) =>
  fields.reduce((prev, current) => {
    if (prev.length > 0) return prev;

    return searchByField(array, current, query);
  }, [])

export const searchByMultipleFields = (array, fields, query) => compose(
  getElementsByFields(array, query),
  splitString(' ')
)(fields)

// URL Methods 
export const makeURL = (string) => 
  cyrillicToTranslit().transform(string, '-').toLowerCase()