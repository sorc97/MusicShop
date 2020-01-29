import React from 'react'
import { render } from 'react-dom'
import App from './components/App/App'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'

render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>,
  document.getElementById('react-container')
)
