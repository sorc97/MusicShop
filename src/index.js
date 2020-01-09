import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import ScrollToTop from './components/ScrollToTop'
import { Provider } from 'react-redux'
import { HashRouter as Router} from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
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
