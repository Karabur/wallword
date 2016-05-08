import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'
import {App}  from './components/app'

import {Provider} from 'react-redux'
import {store} from './store/app-store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
