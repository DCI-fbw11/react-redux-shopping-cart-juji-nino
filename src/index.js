import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

import { createStore } from "redux"
import { Provider } from "react-redux"
import products from "./products.json"

const appReducer = (state , {type, product}) => {

  switch (type) {
    case 'ADD_PRODUCT':
      console.log(product)
      return state

    default:
      return state
  }
  


}
/* ↑
 * ↑ you should delete this line
 * and create a proper reducer and import it.
 * like this ↓
 * import { appReducer } from "./modules/reducers"
 */

const store = createStore(
  appReducer,
  {
    products,
    cart: {}
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
