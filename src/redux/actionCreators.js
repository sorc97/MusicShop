import C from './constants'

export const productsFetchDataSuccess = (persons) => ({
  type: C.PERSONS_FETCH_DATA_SUCCESS,
  persons
})

export const productsFetchData = url => dispatch => {
  fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusText)
      }
      return res
    })
    .then(res => res.json())
    .then(products => dispatch(productsFetchDataSuccess(products)))
}