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

export const initialCart = 
  (localStorage['musicShop-cart']) ?
    JSON.parse(localStorage['musicShop-cart']) :
    []

export const productsPerPage = 6;


/* export const initialCart = [
  {
    category: "электрогитары",
    img: "https://www.muztorg.ru/files/4q1/l02/q4u/oao/o80/o0k/8c0/g80/4/4q1l02q4uoaoo80o0k8c0g804.jpg",
    name: "YAMAHA PACIFICA 012 BL",
    price: 15990,
    amount: 1,
    _id: "5dcbe4abfee11ce04d412910"
  },
  {
    category: "клавишные",
    img: "https://www.muztorg.ru/files/sized/f250x250/5fa/fme/j85/m4o/go8/8wc/w40/kso/8/5fafmej85m4ogo88wcw40kso8.jpg",
    name: "ALESIS V49",
    price: 11400,
    amount: 2,
    _id: "5dcc0b84d5ca63b2556a0db2"
  },
  {
    category: "dj-оборудование",
    img: "https://www.muztorg.ru/files/sized/f250x250/c5h/fth/vq1/s84/o4g/kgs/40o/cw4/w/c5hfthvq1s84o4gkgs40ocw4w.jpg",
    name: "PIONEER DDJ-200",
    price: 11990,
    amount: 5,
    _id: "5dcd2940d5ca63b2556a0db5"
  }
] */