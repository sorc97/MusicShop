import { makeURL } from './lib/helpers'

export const logo = 'MusicShop';

export const sortList = [
  {'По возрастанию цены': 'lowPrice'},
  {'По убыванию цены': 'highPrice'},
  {'По имени': 'name'}
]

export const categoriesList = [
  'Электрогитары',
  'Акустические гитары',
  'Бас гитары',
  'Клавишные',
  'Ударные',
  'Микрофоны',
  'Звуковое оборудование',
  'Dj-оборудование'
]
// Categories URL based on the categories list
export let urlCategories = {};

categoriesList.forEach(item => {
  urlCategories = {
    ...urlCategories,
    [makeURL(item)]: item
  }
})

// Initial cart state
export const initialCart = 
  (localStorage['musicShop-cart']) ?
    JSON.parse(localStorage['musicShop-cart']) :
    []

export const productsPerPage = 6;