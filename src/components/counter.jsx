import React, { Component } from "react";
import { connect } from "react-redux";
import products from "../products.json";
import { addProduct } from "../modules/actions";


const Items = (props) => {
  const array = Object.values(products);
  console.log(props)
  return (
    <div>
      {array.map(product => (
        <ul>
          <li>{product.title}</li>
          <li>{product.price}</li>
          <li>{product.inventory}</li>
          <button onClick={() => {
            props.addProduct(product)
          }}>Add to cart</button>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return state
}

// console.log('addProduct Action', addProduct, addProduct())
const mapDispatchToProps = {
  addProduct
};

//   const Cart = ()=> <div>cart</div>

//   const Checkout = ()=> <div>checkout</div>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
