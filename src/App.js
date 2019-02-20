import React, { Component } from "react"
import products from "./products.json";
import {connect} from 'react-redux'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        
       <Counter/>
       
       </div>
    )
  }
}

export default(App);



