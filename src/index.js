import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('react-container')
)
